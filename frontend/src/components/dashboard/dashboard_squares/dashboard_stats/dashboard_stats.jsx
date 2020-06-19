import './dashboard_stats.css';
import Loading from './loader';
import React from 'react';
import DashboardStatsGraph from './DashboardStatsGraph';
import DashboardStatsAddContainer from './DashboardStatsAddContainer';
import DashboardInfo from '../dashboard_info/dashboard_info';

class DashboardStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataKey: 'cholesterolLevels', //default
            subDataKeys: ["All"], // show all subs by default
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickSub = this.handleClickSub.bind(this);
        window.onclick = (e) => this.hideModal(e);
    }

    componentDidMount(){
    
        // fetch the user's vitals on load
        this.props.fetchCholesterolLevels();
        // this.props.fetchWeights();
        // this.props.fetchVitaminDLevels();  
        // this.props.fetchTemperatures();
        // this.props.fetchRestingHeartRates();  
        // this.props.fetchBloodPressureLevels();   
    }

    componentDidUpdate(prevProps, prevState){

        // this manages graph display whenever a user clicks a subvital
        // it will reset subDataKeys and selected-sub styling when user clicks on another dataKey
        const currentDataKey = this.state.dataKey
        if (this.state.dataKey !== prevState.dataKey){ // when user selects a new vital
            this.setState({subDataKeys: ["All"]}); // reset default subs
            let selected = document.querySelectorAll('.dashboard-stats .selected-sub'); // currently selected subvitals, to have styling removed
            for (let i = 0; i < selected.length; i++){ // remove styling from all of the previously selected subs
                selected[i].classList.remove('selected-sub');
            }
            document.querySelectorAll('.dashboard-stats-sublist li')[0].classList.add('selected-sub') // add selected styling to 'All'
            switch (currentDataKey) {
                case 'cholesterolLevels':
                    this.props.fetchCholesterolLevels();   
                    break;
                case 'bloodPressureLevels':
                    this.props.fetchBloodPressureLevels();   
                    break;
                case 'weights':
                    this.props.fetchWeights();   
                    break;
                case 'vitaminDLevels':
                    this.props.fetchVitaminDLevels();   
                    break;
                case 'temperatures':
                    this.props.fetchTemperatures();   
                    break;
                case 'restingHeartRates':
                    this.props.fetchRestingHeartRates();   
                    break;
                default:
                    break;
            }
        }
    }


    handleClick(e) {
        // const selected1 = document.querySelector('.dashboard-stats-sublist').classList.toggle("hidden");
        
        // open/close based on this.state.opened, and SET DATAKEY
        if (!this.state.opened){
            this.setState({opened: true}, (e) => this.showModal(e));
        } else {
            const dataKey = e.currentTarget.getAttribute('value'); // get the value attribute set on each <li>, must match state
            this.setState({dataKey: dataKey, opened: false}, (e) => this.hideModal(e)); // this sets which vital will be shown
        }
        e.stopPropagation(); // need this in order to not interfere with the onclick of #my-stats-div
    }

    showModal(e){
  
        this.setState({opened: true});  
        const listItems = document.querySelectorAll('.dashboard-stats-list li'); // the list items from .dashboard-stats-list
        // const listItems = e.currentTarget.parentNode.children; // the list items from .dashboard-stats-list
        for (let i = 0; i < listItems.length; i++){ // iterate through the list items and display them
            listItems[i].style.display = "block";
        }
        if(e) e.stopPropagation();
    }

    hideModal(e){
      
        this.setState({opened: false});
        const vitalListItems = document.querySelectorAll('.dashboard-stats-list li');
        for (let i = 0; i < vitalListItems.length; i++){
            const currentItem = vitalListItems[i];
            if (currentItem.getAttribute('value') !== this.state.dataKey){
                currentItem.style.display = "none";
            } else {
                currentItem.style.display = "block";
            }
        }
        if(e) e.stopPropagation();
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

    addVital(){
     
        let container = document.querySelector('.add-vital-outer-container');
        container.style.display = (container.style.display === '') ? "block" : "";
    }

    render(){
        
        const { vitalsLoading, vitals, userId, loggedIn } = this.props;
        // if (vitalsLoading) return <Loading />
        if (!userId || !loggedIn) return null;
      
        // if (!loggedIn || !userId || (!vitals['bloodPressureLevels'] && !vitals['cholesterolLevels'] && !vitals['weights'] && !vitals['vitaminDLevels'] && !vitals['temperatureLevels'] && !vitals['restingHeartRates']) ) return null;
        const dontInclude = ["allergies", "medicalConditions"]; // these vitals have no numerical values
        const data = vitals[this.state.dataKey]; // used for recharts component
       

        // this specificies the subVitals that should be extracted from the specific vital's slice of state
        let subVitals = (function(vital) {
            switch(vital) { 
              case 'bloodPressureLevels': // specific vital
                return ["systolic", "diastolic"] // specific subvitals
              case 'cholesterolLevels':
                return ["LDL", "HDL", "total", "triglycerides"]
              case 'restingHeartRates':
                return ["BPM"]
              case 'temperatures':
                return ["degrees"]
              case 'vitaminDLevels':
                return ["level"]
              case 'weights':
                return ["pounds"]
              default:
                return ["value"];
            }
          })(this.state.dataKey); // passes the vital into the switch statement

        // use to determine what the number of subvitals to display on graph
        let chartLines; 
     
        // this shows all subvitals if all is selected
        if (this.state.subDataKeys.includes('All') && this.state.subDataKeys.length == 1){
            chartLines = subVitals;
        // otherwise, it shows the subs as specified by the user
        } else {
            chartLines = this.state.subDataKeys;
        }

        const noVitals = (
            <p className="no-vitals">Looks like you have no stats yet! Click the <span className="no-vitals-plus">+</span> below to get started!</p>
        )

        // this var goes below.. shows a loader while fetching and then changes to noVitals (another conditional used below)
        const loadingOrNoVitals = (vitalsLoading) ? <Loading /> : noVitals; 
         

        const allButton = () => {
            if(subVitals.length > 1) {
                return <li value="All" className="selected-sub" onClick={this.handleClickSub}>All</li>;
            }
        }

        return(  
            <div id='my-dashboard-stats' className='dashboard-stats'>
                <div className="dashboard-stats-list__container">

                    <ul className="dashboard-stats-list">
                        {/* values on the li are the vitals keys, displayed text uses regex to convert camelcase to capitalized first letter with spaces in between */}
                        {/* exclude values if they don't have numeric stats */}
                        {Object.keys(vitals).map((vitalName, idx) => (!dontInclude.includes(vitalName)) ? 
                        <li 
                            key={idx} 
                            value={vitalName} 
                            className={(this.state.dataKey === vitalName) ? "selected" : ""} 
                            onClick={(e) => this.handleClick(e)}>
                                {vitalName.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })} 
                        </li> : "")}
                    </ul>
                    <i onClick={(e) => this.showModal(e)} className="fas fa-chevron-circle-down"></i>
                    <h1 className="dashboard-stats-list__h1">Choose which stats you would like to see and expand card details on.</h1>
                    
                </div>
                
                <DashboardStatsAddContainer vital={this.state.dataKey} subVitals={subVitals} />
                    
                    {/* this is the navigation panel on the right of the graph. it shows all the relevant numerical sub data keys, as defined by subVitals */}
                <ul className="dashboard-stats-sublist">
                    {allButton()}    
                    {subVitals.map((subVital, idx) => {
                        let subVitalShow = subVital[0].toUpperCase() + subVital.slice(1);
                        return (<li key={idx} value={subVital} onClick={this.handleClickSub}>{subVitalShow}</li>)
                    })}
                </ul>

                {/* show a loader while fetching; if user has no stats, show the helper message  */}
                {(!data.length) ? loadingOrNoVitals : <DashboardStatsGraph data={data} chartLines={chartLines} />}

                <div className="dash__addAVital" onClick={() => this.addVital()} >
                    <i className="fas fa-plus-circle"></i>
                    <h1>Add a Vital</h1>
                </div>
                <DashboardInfo dataKey={this.state.dataKey} subDataKeys={this.state.subDataKeys} />
                
                <h3 className="disclaimer">*None of the information on this website is medically affiliated in any way. We are not doctors and this application is purely for web development showcasing purposes only.</h3>
                <h3 className="disclaimer">**First data point omitted on all graphs for visual purposes.</h3>
            </div>
        )
    }
}

export default DashboardStats;