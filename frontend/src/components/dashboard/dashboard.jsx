import React from 'react';
import DashboardStatsContainer from './dashboard_squares/dashboard_stats/dashboard_stats_container';
import DashboardInfoContainer from './dashboard_squares/dashboard_info/dashboard_info_container';
import './dashboard.css';

class Dashboard extends React.Component {

    render(){
        return(
                <div className='dashboard' id="dashboard" >
                    <DashboardStatsContainer />
                    <DashboardInfoContainer />
                </div>
        )
    }
}

export default Dashboard;