import React from 'react';
import {PrivateRoute} from '../../util/route';
import DashboardContainer from '../dashboard/dashboard_container';
import SideNavContainer from '../side_nav/side_nav_container';
import NewPicture from '../pictures/NewPicture';
import editFormContainer from '../edit_form/editFormContainer';
import Allergies from '../allergies/Allergies';
import danc from './danc.png';
import './main.css';

class Main extends React.Component {
    componentDidMount(){
        this.props.fetchCurrentUser();
    }

    render(){

        const {handle} = this.props;
        const date = new Date();
        const hours = date.getHours();
        let greeting = '';

        if(hours >= 4 && hours <= 5) {
            greeting = `Wow ${handle}, you're up early!`
        } else if(hours < 12 && hours >= 6) {
            greeting = `Good morning ${handle}!`;
        } else if (hours >= 12 && hours <= 17) {
            greeting = `Good afternoon ${handle}`;
        } else if (hours > 17 && hours <= 21) {
            greeting = `Good evening ${handle}!`;
        } else if (hours >= 22 && hours <= 24) {
            greeting = `Good night ${handle}!`;
        } else if (hours >= 1 && hours <= 3) {
            greeting = `Sleep is important for the body ${handle}!`;
        }

        return(
            <div className='vital-main'>
                <PrivateRoute path='/main' component={SideNavContainer} />
                <div className='danc-talk'>
                    <div className='speech-bubble'>{greeting}</div>
                    <img src={danc} width='100' height='140' className='danc' alt=""/>
                </div>
                <PrivateRoute path='/main/dashboard' component={DashboardContainer} />
                <PrivateRoute exact path="/main/pictures/new" component={NewPicture} />
                <PrivateRoute path='/main/edit' component={editFormContainer} />
                <PrivateRoute path='/main/allergies' component={Allergies} />
            </div>
        )
    }
}

export default Main;