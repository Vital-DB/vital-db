import React from 'react';
import {PrivateRoute} from '../../util/route';
import DashboardContainer from '../dashboard/dashboard_container';
import SideNavContainer from '../side_nav/side_nav_container';
import NewPicture from '../pictures/NewPicture';
import editFormContainer from '../edit_form/editFormContainer';
import Allergies from '../allergies/Allergies';
// import danc from './danc.png';
import './main.css';

class Main extends React.Component {
    componentDidMount(){
        this.props.fetchCurrentUser();
    }

    render(){


        return(
            <div className='vital-main'>
                <PrivateRoute path='/main' component={SideNavContainer} />
                
                <PrivateRoute path='/main/dashboard' component={DashboardContainer} />
                <PrivateRoute exact path="/main/pictures/new" component={NewPicture} />
                <PrivateRoute path='/main/edit' component={editFormContainer} />
                <PrivateRoute path='/main/allergies' component={Allergies} />
            </div>
        )
    }
}

export default Main;