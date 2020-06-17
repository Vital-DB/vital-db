import React from 'react';
import './side_nav.css';
import {NavLink} from 'react-router-dom'
import { dateFormatter, heightFormatter } from '../../util/helper_util';
import danc from './danc.png';

class SideNav extends React.Component {
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        // this.highlightNav = this.highlightNav.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    openNav() {
        document.getElementById("my-sidenav").style.width = "250px";

        if(document.getElementById('dashboard')){
            // document.getElementById('dashboard').style.marginLeft = "400px";
        }

        if(document.getElementById('my-edit-form')){
            document.getElementById('my-edit-form').style.marginLeft = "200px"
        }
    }

    closeNav() {
        document.getElementById("my-sidenav").style.width = "0";

        if(document.getElementById('dashboard')){
            // document.getElementById('dashboard').style.marginLeft = "200px";
        }
        if(document.getElementById('my-edit-form')){
            document.getElementById('my-edit-form').style.marginLeft = "0"
        }
    }

    render(){
        let { firstName, lastName, sex, birthday, bloodType, weight, height, organDonor } = this.props.currentUser;

        if(!birthday){
            return null;
        } else {
            birthday = new Date(birthday);
        }
        
        const date = new Date();
        const hours = date.getHours();
        let greeting = '';

        if(hours >= 4 && hours <= 5) {
            greeting = `Wow ${firstName}, you're up early!`
        } else if(hours < 12 && hours >= 6) {
            greeting = `Good morning ${firstName}!`;
        } else if (hours >= 12 && hours <= 17) {
            greeting = `Good afternoon ${firstName}`;
        } else if (hours > 17 && hours <= 21) {
            greeting = `Good evening ${firstName}!`;
        } else if (hours >= 22 && hours <= 24) {
            greeting = `Good night ${firstName}!`;
        } else if (hours >= 1 && hours <= 3) {
            greeting = `Sleep is important for the body ${firstName}!`;
        }

        return (
            <div>
                <div id='my-sidenav' className='sidenav'>
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div className='sidenav-profile-image'>PROFILE IMAGE</div>
                    <div className="sidenav-info">
                        <h1>`Hello {firstName}!`</h1>
                        <h1>{`Birthdate: ${dateFormatter(birthday)}`}</h1>
                        <h1>{`Blood Type: ${bloodType}`}</h1>
                        <h1>{`Current Weight: ${weight}lbs`}</h1>
                        <h1>{`Height: ${heightFormatter(height)}`}</h1>
                        <h1 className='sidenav-info-last'>{`Organ Donor: ${organDonor}`}</h1>
                    </div>
                    <div className='sidenav-link-group'>
                        <div className='sidenav-links'>
                            <NavLink to="/main/dashboard" id='sidenav-home-link'><i className="fas fa-home"></i>Home</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to="/main/edit" id='sidenav-edit-link'><i className="fas fa-user-edit"></i>Edit Profile</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to="/main/checkup/history" id='sidenav-history-link'><i className="fas fa-notes-medical"></i>Checkup History</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to="/main/prescriptions" id='sidenav-prescription-link'><i className="fas fa-capsules"></i>Medications</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to="/main/vaccinations" id='sidenav-vaccination-link'><i className="fas fa-syringe"></i>Vaccinations</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to='/main/allergies' id='sidenav-allergy-link'><i className="fas fa-allergies"></i>Allergies</NavLink>
                        </div>
                    <button className='sidenav-logout' onClick={this.logoutUser}>LOGOUT</button>
                    </div>
                    
                    
                    
                </div>
                <div className='danc-talk'>
                    <div className='speech-bubble'>{greeting}</div>
                    <img src={danc} width='100' height='140' onClick={this.openNav} className='danc' alt=""/>
                </div>
            </div>
        )
    }
}

export default SideNav;