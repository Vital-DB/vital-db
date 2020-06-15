import React from 'react';
import SideNavContainer from '../side_nav/side_nav_container';
import DashboardStatsContainer from './dashboard_squares/dashboard_stats/dashboard_stats_container';
import PrescriptionSquareContainer from './dashboard_squares/prescription_square/prescription_square_container';
import MostRecentCheckupSquareContainer from './dashboard_squares/checkup_square/most_recent_checkup_container';
import './dashboard.css';

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <SideNavContainer />
                <div className='dashboard'>
                    <DashboardStatsContainer />
                    <div className='dashboard-bottom-squares'>
                        <PrescriptionSquareContainer />
                        <MostRecentCheckupSquareContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;