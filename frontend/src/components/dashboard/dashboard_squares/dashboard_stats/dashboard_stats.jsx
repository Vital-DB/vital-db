import React from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import './dashboard_stats.css';
import {Route} from 'react-router-dom'

class DashboardStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataKey: 'cholesterolLevels', 
            subDataKeys: ["All"],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickSub = this.handleClickSub.bind(this);
    }

    componentDidMount(){
        this.props.fetchWeights();
        this.props.fetchVitaminDLevels();  
        this.props.fetchTemperatures();
        this.props.fetchRestingHeartRates();  
        this.props.fetchBloodPressureLevels();   
        this.props.fetchCholesterolLevels();
    }

    componentDidUpdate(prevProps, prevState){

        // reset subDataKeys and selected-sub when user clicks on another dataKey
       if (this.state.dataKey !== prevState.dataKey){
           this.setState({subDataKeys: ["All"]});
           let selected = document.querySelectorAll('.dashboard-stats .selected-sub');
           for (let i = 0; i < selected.length; i++){
               debugger
               selected[i].classList.remove('selected-sub');
           }
           document.querySelectorAll('.dashboard-stats-sublist li')[0].classList.add('selected-sub')
       }
    }

    handleClick(e) {
        
        const selected = document.querySelector('.dashboard-stats-list .selected');
        const listItems = e.currentTarget.parentNode.children;
        
        if (selected){
            selected.classList.remove('selected');
            for (let i = 0; i < listItems.length; i++){
                e.currentTarget.parentNode.children[i].style.display = "block";
            }
        } else {
           
            e.currentTarget.classList.add('selected')
            for (let i = 0; i < listItems.length; i++){
                if (!e.currentTarget.parentNode.children[i].classList.contains('selected')){
                    e.currentTarget.parentNode.children[i].style.display = "none";
                }
            }
            // e.currentTarget.parentNode.prepend(selected)
        }

        const dataKey = e.currentTarget.getAttribute('value');

        this.setState({dataKey: dataKey});
    }

    handleClickSub(e){
        
        let subDataKeys = this.state.subDataKeys;
        let target = e.currentTarget;
        let dataKey = target.getAttribute('value');
        let selectedSubs = [];

        if (dataKey === 'All'){
            target.classList.add('selected-sub');
            let allSubs = target.parentNode.children;
            for(let i = 0; i < allSubs.length; i++){
                debugger
                let currentSub = allSubs[i];
                selectedSubs.push(currentSub.getAttribute('value'));
                if (i !== 0) currentSub.classList.remove('selected-sub');
            }
        } else {
            let allDataKey = target.parentNode.children[0];
            if (subDataKeys[0] === "All" || (allDataKey.getAttribute('value') === 'All') && allDataKey.classList.contains('selected-sub') ) {
                subDataKeys = [];
                allDataKey.classList.remove('selected-sub');
            }

            if (subDataKeys.includes(dataKey) && !subDataKeys.includes('All')){
                target.classList.remove('selected-sub');
                const removedIdx = subDataKeys.indexOf(dataKey);
                const first = subDataKeys.slice(0, removedIdx);
                const last = subDataKeys.slice(removedIdx+1);

                selectedSubs = first.concat(last);
            } else {
                selectedSubs.pop();
                target.classList.add('selected-sub');
                subDataKeys.push(dataKey);
                selectedSubs = subDataKeys;
            }
        }        
        this.setState({subDataKeys: selectedSubs})
    }

    render(){
        const { vitals } = this.props;

        // if (!vitals) return null;

        // fields to exclude when generating chart type selections
        const dontInclude = ["allergies", "medicalConditions"];

        
        // const dummyStats = [{weight: 220, restingHR: 75, date: '6/01/2020'}, {weight: 218, restingHR: 80, date: '6/12/2020'}, {weight: 210, restingHR: 78, date: '6/15/2020'}, {weight: 214, restingHR: 85, date: '6/16/2020'}]
        const data = vitals[this.state.dataKey];

        let subVitals = (function(vital) {
            switch(vital) {
              case 'bloodPressureLevels':
                return ["systolic", "diastolic"]
              case 'cholesterolLevels':
                return ["LDL", "HDL", "total", "triglycerides"]
              default:
                return ["value"];
            }
          })(this.state.dataKey);

        let chartLines; 
        if (this.state.subDataKeys.includes('All') & this.state.subDataKeys.length == 1){
            chartLines = subVitals;
        } else {
            chartLines = this.state.subDataKeys;
        }
    

        let renderLineChart = (
            <ResponsiveContainer>
                <LineChart data={data}>
                    {chartLines.map((subVital, idx) => <Line key={idx} type="monotone" dataKey={subVital} fill="#7cc5f5" /> )}
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey='date' />
                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        );

        // switch (this.state.dataKey) {
        //     case "bloodPressureLevels":
        //         renderLineChart = (
        //             <ResponsiveContainer>
        //             <LineChart data={data}>
        //                 <Line type="monotone" dataKey={"systolic"} fill="#7cc5f5" />
        //                 <Line type="monotone" dataKey={"diastolic"} fill="#7cc5f5" />
        //                 <CartesianGrid stroke="#ccc" />
        //                 <Tooltip/>
        //                 <XAxis dataKey='date' />
        //                 <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
        //             </LineChart>
        //             </ResponsiveContainer>
        //         )
        //         break;
        
        //     default:
        //         break;
        // }

        //   debugger
        return(

            <div id='my-dashboard-stats' className='dashboard-stats'>
                <div className='dashboard-stats-header'>

                {/* <div>{this.state.dataKey}</div> */}
                    {/* <form>
                        <label>
                            Weight
                            <input type="radio" value='weight' name='dashboard-info' onClick={this.handleClick} />
                        </label>
                        <label>
                            Resting Heart Rate
                            <input type="radio" value='restingHR' name='dashboard-info' onClick={this.handleClick} />
                        </label>
                    </form> */}
                    <ul className="dashboard-stats-list">
                        {/* values on the li are the vitals keys, displayed text uses regex to convert camelcase to capitalized first letter with spaces in between */}
                        {/* exclude values if they don't have numeric stats */}
                        {Object.keys(vitals).map((vitalName, idx) => (!dontInclude.includes(vitalName)) ? <li key={idx} value={vitalName} className={(idx == 0) ? "selected" : ""} onClick={this.handleClick}>{vitalName.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}</li> : "")}
                    </ul>
                    <ul className="dashboard-stats-sublist">
                        <li value="All" className="selected-sub" onClick={this.handleClickSub}>All</li>
                        {subVitals.map((subVital, idx) => <li key={idx} value={subVital} onClick={this.handleClickSub}>{subVital}</li>)}
                    </ul>
                </div>
                {renderLineChart}

            </div>
        )
    }
}

export default DashboardStats;