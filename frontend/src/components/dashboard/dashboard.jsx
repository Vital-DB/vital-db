import React from 'react';
import DashboardStatsContainer from './dashboard_squares/dashboard_stats/dashboard_stats_container';
import DashboardInfoContainer from './dashboard_squares/dashboard_info/dashboard_info_container';
import './dashboard.css';

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <div className='dashboard'>
                    <DashboardStatsContainer />
                    <DashboardInfoContainer />
                </div>
            </div>
        )
    }
}

export default Dashboard;