import React from 'react';
import {PrivateRoute} from '../../util/route';
import DashboardContainer from '../dashboard/dashboard_container';
import SideNavContainer from '../side_nav/side_nav_container';
import NewRecord from '../records/NewRecord';

class Main extends React.Component {
    render(){
        return(
            <div>
                <PrivateRoute path='/main' component={SideNavContainer} />
                <PrivateRoute path='/main/dashboard' component={DashboardContainer} />
                <PrivateRoute exact path="/main/records/new" component={NewRecord} />
            </div>
        )
    }
}

export default Main;