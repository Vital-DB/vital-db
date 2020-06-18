import React from 'react';
import DashboardStatsContainer from './dashboard_squares/dashboard_stats/dashboard_stats_container';
import './dashboard.css';

class Dashboard extends React.Component {

    render(){
        return(
                <div className='dashboard' id="dashboard" >
                    <DashboardStatsContainer />
                </div>
        )
    }
}

export default Dashboard;