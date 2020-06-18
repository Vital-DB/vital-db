import React from 'react';
import {PrivateRoute} from '../../util/route';
import DashboardContainer from '../dashboard/dashboard_container';
import SideNavContainer from '../side_nav/side_nav_container';
import NewPicture from '../pictures/NewPicture';
import editFormContainer from '../edit_form/editFormContainer';
import Allergies from '../allergies/Allergies';
import CheckupHistory from '../checkupHistory/CheckupHistory';
// import danc from './danc.png';
import './main.css';

class Main extends React.Component {
    componentDidMount(){
        this.props.fetchCurrentUser();
    }
    componentDidUpdate(prevProps){
        debugger
        if (this.props.location.pathname !== prevProps.location.pathname){
            this.props.clearVitalsErrors();
        }
    }

    render(){
        return(
            <div className='vital-main'>
                <PrivateRoute path='/main' component={SideNavContainer} />
                <PrivateRoute path='/main/dashboard' component={DashboardContainer} />
                <PrivateRoute exact path="/main/pictures/new" component={NewPicture} />
                <PrivateRoute path='/main/profile' component={editFormContainer} />
                <PrivateRoute path='/main/allergies' component={Allergies} />
                <PrivateRoute path='/main/checkup/history' component={CheckupHistory} />
            </div>
        )
    }
}

export default Main;