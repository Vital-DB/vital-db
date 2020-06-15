import React from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import './dashboard_stats.css';

class DashboardStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {dataKey: 'weight'}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {

    }

    render(){
        const dummyStats = [{weight: 220, restingHR: 75, date: '6/01/2020'}, {weight: 218, restingHR: 80, date: '6/12/2020'}, {weight: 210, restingHR: 78, date: '6/15/2020'}, {weight: 214, restingHR: 85, date: '6/16/2020'}]
        
        const renderLineChart = (
            <ResponsiveContainer>
                <LineChart data={dummyStats}>
                    <Line type="monotone" dataKey={this.state.dataKey} fill="#7cc5f5" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey='date' />
                    <YAxis dataKey='weight' domain={['dataMin - 5', 'dataMax + 5']} />
                </LineChart>
            </ResponsiveContainer>
        );

        return(
            <div id='my-dashboard-stats' className='dashboard-stats'>
                <div>
                DASHBOARD STATS
                    <select name='stat' id='stat'>
                        <option onClick={this.handleClick} value="weight">Weight</option>
                        <option onClick={this.handleClick} value="restingHR">Resting Heart Rate</option>
                    </select>
                </div>
                {renderLineChart}
            </div>
        )
    }
}

export default DashboardStats;