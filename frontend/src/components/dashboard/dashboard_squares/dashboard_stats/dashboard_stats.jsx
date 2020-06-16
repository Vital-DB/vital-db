import React from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import './dashboard_stats.css';

class DashboardStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {dataKey: 'test'}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // debugger;
        this.setState({dataKey: e.currentTarget.getAttribute('value')})
    }

    render(){
        const { vitals } = this.props;

        if (!vitals) return null;

        // fields to exclude when generating chart type selections
        const dontInclude = ["allergies", "medicalConditions"];

        
        // const dummyStats = [{weight: 220, restingHR: 75, date: '6/01/2020'}, {weight: 218, restingHR: 80, date: '6/12/2020'}, {weight: 210, restingHR: 78, date: '6/15/2020'}, {weight: 214, restingHR: 85, date: '6/16/2020'}]
        const data = vitals;
        
        const renderLineChart = (
            <ResponsiveContainer>
                <LineChart data={data}>
                    <Line type="monotone" dataKey={this.state.dataKey} fill="#7cc5f5" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey='date' />
                    <YAxis dataKey={this.state.dataKey} domain={['dataMin - 5', 'dataMax + 5']} />
                </LineChart>
            </ResponsiveContainer>
        );

        return(

            <div id='my-dashboard-stats' className='dashboard-stats'>
                <div className='dashboard-stats-header'>
                <div>DASHBOARD STATS</div>

                <div>{this.state.dataKey}</div>
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
                        {Object.keys(vitals).map((vitalName, idx) => (!dontInclude.includes(vitalName)) ? <li key={idx} value={vitalName} onClick={this.handleClick}>{vitalName.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}</li> : "")}
                    </ul>
                </div>
                {renderLineChart}
            </div>
        )
    }
}

export default DashboardStats;