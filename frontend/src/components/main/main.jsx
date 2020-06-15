import React from 'react';
import {PrivateRoute} from '../../util/route';
import DashboardContainer from '../dashboard/dashboard_container';
import SideNavContainer from '../side_nav/side_nav_container';
import NewPicture from '../pictures/NewPicture';

class Main extends React.Component {
    render(){
        return(
            <div>
                <PrivateRoute path='/main' component={SideNavContainer} />
                <PrivateRoute path='/main/dashboard' component={DashboardContainer} />
                <PrivateRoute exact path="/main/pictures/new" component={NewPicture} />
            </div>
        )
    }
}

export default Main;