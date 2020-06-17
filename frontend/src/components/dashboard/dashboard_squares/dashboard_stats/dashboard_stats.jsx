import './dashboard_stats.css';
import Loading from './loader'
import React from 'react';
import DashboardStatsGraph from './DashboardStatsGraph'

class DashboardStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataKey: 'cholesterolLevels', //default
            subDataKeys: ["All"], // show all subs by default
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickSub = this.handleClickSub.bind(this);
    }

    componentDidMount(){
        // fetch the user's vitals on load
        debugger
        this.props.startLoadingVitals();
        this.props.fetchWeights();
        this.props.fetchVitaminDLevels();  
        this.props.fetchTemperatures();
        this.props.fetchRestingHeartRates();  
        this.props.fetchBloodPressureLevels();   
        this.props.fetchCholesterolLevels();
    }

    componentDidUpdate(prevProps, prevState){
        debugger
        // this manages graph display whenever a user clicks a subvital
        // it will reset subDataKeys and selected-sub styling when user clicks on another dataKey
        if (this.state.dataKey !== prevState.dataKey){ // when user selects a new vital
            this.setState({subDataKeys: ["All"]}); // reset default subs
            let selected = document.querySelectorAll('.dashboard-stats .selected-sub'); // currently selected subvitals, to have styling removed
            for (let i = 0; i < selected.length; i++){ // remove styling from all of the previously selected subs
                selected[i].classList.remove('selected-sub');
            }
            document.querySelectorAll('.dashboard-stats-sublist li')[0].classList.add('selected-sub') // add selected styling to 'All'
        }
    }

    // handles the state change & dropdown visibility for vitals that are clicked from the menu
    handleClick(e) {
        const selected = document.querySelector('.dashboard-stats-list .selected'); // select the current list item with class selected
        const listItems = e.currentTarget.parentNode.children; // the list items from .dashboard-stats-list
        
        // this operates the dropdown on first click
        if (selected){ // if there is a currently selected vital
            selected.classList.remove('selected'); // remove the selected class
            for (let i = 0; i < listItems.length; i++){ // iterate through the list items and display them
                listItems[i].style.display = "block";
            }
        } else { // this is the 2nd click
            e.currentTarget.classList.add('selected'); // style the clickedlist item

            // hide the other list items that aren't selected
            for (let i = 0; i < listItems.length; i++){ 
                if (!listItems[i].classList.contains('selected')) listItems[i].style.display = "none";
            }
        }
        const dataKey = e.currentTarget.getAttribute('value'); // get the value attribute set on each <li>, must match state
        this.setState({dataKey: dataKey}); // this sets which vital will be shown
    }

    // when user clicks the subDataKey list (nav on the right of the graph), this sets the specific vital statistics to display
    handleClickSub(e){
        let subDataKeys = this.state.subDataKeys; // default ["all"]; otherwise, is set to currently selected subKeys
        let target = e.currentTarget; // the vital stat the user clicked on
        let dataKey = target.getAttribute('value'); // the attribute's value created on the subvital's dom element
        let selectedSubs = []; // this is where newly selected subVitals will go into

        // when user clicks on the 'All' button
        if (dataKey === 'All'){
            target.classList.add('selected-sub'); // this sets styling back on 'All' when user clicks other vitals then clicks all
            let allSubs = target.parentNode.children; // all sub values

            // iterate through all of a vital's stats and adds them to be displayed in the chart 
            for(let i = 0; i < allSubs.length; i++){
                let currentSub = allSubs[i];
                selectedSubs.push(currentSub.getAttribute('value'));
                if (i !== 0) currentSub.classList.remove('selected-sub'); // keeps all selected after choosing specific stats
            }
        // when user clicks on a subVital option other than 'All'
        } else {
            let allDataKey = target.parentNode.children[0]; // the 'All' button

            // removes styling from 'All' and reset subDataKeys if the user has clicked 'All' before
            if (subDataKeys[0] === "All" && allDataKey.classList.contains('selected-sub') ) {
                subDataKeys = [];
                allDataKey.classList.remove('selected-sub');
            }

            // removes the subVital from the graph if it was clicked before
            if (subDataKeys.includes(dataKey) && !subDataKeys.includes('All')){
                target.classList.remove('selected-sub');
                const removedIdx = subDataKeys.indexOf(dataKey);
                const first = subDataKeys.slice(0, removedIdx);
                const last = subDataKeys.slice(removedIdx+1);
                selectedSubs = first.concat(last); // variable with the re-clicked subVital removed
            // adds the subVital to the graph
            } else {
                selectedSubs.pop();
                target.classList.add('selected-sub');
                subDataKeys.push(dataKey);
                selectedSubs = subDataKeys;
            }
        }        
        this.setState({subDataKeys: selectedSubs}) // this sets the subVitals to be displayed on the graph
    }

    render(){
        debugger;
        const { vitalsLoading, vitals, userId, loggedIn } = this.props;
        if (!loggedIn) return null;
        debugger
        // if (!loggedIn || !userId || (!vitals['bloodPressureLevels'] && !vitals['cholesterolLevels'] && !vitals['weights'] && !vitals['vitaminDLevels'] && !vitals['temperatureLevels'] && !vitals['restingHeartRates']) ) return null;
        const dontInclude = ["allergies", "medicalConditions"]; // these vitals have no numerical values
        const data = vitals[this.state.dataKey]; // used for recharts component
        debugger

        // this specificies the subVitals that should be extracted from the specific vital's slice of state
        let subVitals = (function(vital) {
            switch(vital) { 
              case 'bloodPressureLevels': // specific vital
                return ["systolic", "diastolic"] // specific subvitals
              case 'cholesterolLevels':
                return ["LDL", "HDL", "total", "triglycerides"]
              default:
                return ["value"];
            }
          })(this.state.dataKey); // passes the vital into the switch statement

        // use to determine what the number of subvitals to display on graph
        let chartLines; 
        debugger
        // this shows all subvitals if all is selected
        if (this.state.subDataKeys.includes('All') && this.state.subDataKeys.length == 1){
            chartLines = subVitals;
        // otherwise, it shows the subs as specified by the user
        } else {
            chartLines = this.state.subDataKeys;
        }
        debugger
        return(
            <div id='my-dashboard-stats' className='dashboard-stats'>
                <div className='dashboard-stats-header'>
                    <ul className="dashboard-stats-list">
                        {/* values on the li are the vitals keys, displayed text uses regex to convert camelcase to capitalized first letter with spaces in between */}
                        {/* exclude values if they don't have numeric stats */}
                        {Object.keys(vitals).map((vitalName, idx) => (!dontInclude.includes(vitalName)) ? <li key={idx} value={vitalName} className={(idx == 0) ? "selected" : ""} onClick={this.handleClick}>{vitalName.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}</li> : "")}
                    </ul>
                    {/* this is the navigation panel on the right of the graph. it shows all the relevant numerical sub data keys, as defined by subVitals */}
                    <ul className="dashboard-stats-sublist">
                        <li value="All" className="selected-sub" onClick={this.handleClickSub}>All</li>
                        {subVitals.map((subVital, idx) => <li key={idx} value={subVital} onClick={this.handleClickSub}>{subVital}</li>)}
                    </ul>
                </div>
                {(!data.length) ? <Loading /> : <DashboardStatsGraph data={data} chartLines={chartLines} />}
            </div>
        )
    }
}
export default DashboardStats;