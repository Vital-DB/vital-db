import React from 'react';
import './side_nav.css';
import {NavLink} from 'react-router-dom'
import { dateFormatter, heightFormatter } from '../../util/helper_util';
class SideNav extends React.Component {
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    openNav() {
        document.getElementById("my-sidenav").style.width = "250px";

        if(document.getElementById('my-dashboard-stats')){
            document.getElementById('my-dashboard-stats').style.marginLeft = "250px";
            document.getElementById('my-dashboard-info').style.marginLeft = "250px";
        }
        if(document.getElementById('my-edit-form')){
            document.getElementById('my-edit-form').style.marginLeft = "200px"
        }
    }

    closeNav() {
        document.getElementById("my-sidenav").style.width = "0";

        if(document.getElementById('my-dashboard-stats')){
            document.getElementById('my-dashboard-stats').style.marginLeft = "0";
            document.getElementById('my-dashboard-info').style.marginLeft = "0";
        }
        if(document.getElementById('my-edit-form')){
            document.getElementById('my-edit-form').style.marginLeft = "0"
        }
    }

    render(){
        let { firstName, lastName, sex, birthday, bloodType, weight, height } = this.props.currentUser;

        if(!birthday){
            return null;
        } else {
            birthday = new Date(birthday);
        }

        return (
            <div>
                <div id='my-sidenav' className='sidenav'>
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div className='sidenav-profile-image'>PROFILE IMAGE</div>
                    <div className="sidenav-info">
                        <h1>{`Hello, ${firstName}`}</h1>
                        <h1>{`Birthdate: ${dateFormatter(birthday)}`}</h1>
                        <h1>{`Blood Type: ${bloodType}`}</h1>
                        <h1>{`Current Weight: ${weight}lbs`}</h1>
                        <h1 className='sidenav-info-last'>{`Height: ${heightFormatter(height)}`}</h1>
                    </div>
                    <NavLink to="/main/dashboard">Home</NavLink>
                    <NavLink to="/home">Splash</NavLink>
                    <NavLink to="/main/edit">Edit Profile</NavLink>
                    <NavLink to="/main/checkup/history">Checkup History</NavLink>
                    <NavLink to="/main/prescriptions">Medications</NavLink>
                    <NavLink to="/main/vaccinations">Vaccinations</NavLink>
                    <NavLink to='/main/allergies'>Allergies</NavLink>
                    <button onClick={this.logoutUser}>LOGOUT</button>
                </div>
                <span className='sidenav-open' onClick={this.openNav}>&#9776;</span>
            </div>
        )
    }
}

export default SideNav;