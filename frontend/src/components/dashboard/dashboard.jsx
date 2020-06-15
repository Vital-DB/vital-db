import React from 'react';
import SideNavContainer from '../side_nav/side_nav_container';
import DashboardStatsContainer from './dashboard_squares/dashboard_stats_container';

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <SideNavContainer />
                <div className='dashboard'>
                    <DashboardStatsContainer />
                </div>
            </div>
        )
    }
}

export default Dashboard;