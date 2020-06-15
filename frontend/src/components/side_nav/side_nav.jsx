import React from 'react';
import './side_nav.css';
import {NavLink} from 'react-router-dom'

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
        document.getElementById('my-dashboard-stats').style.marginLeft = "250px";
        document.getElementById('my-prescription-square').style.marginLeft = "250px";
    }

    closeNav() {
        document.getElementById("my-sidenav").style.width = "0";
        document.getElementById('my-dashboard-stats').style.marginLeft = "0";
        document.getElementById('my-prescription-square').style.marginLeft = "0";
    }

    render(){
        return (
            <div>
                <div id='my-sidenav' className='sidenav'>
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div className='sidenav-profile-image'>PROFILE IMAGE</div>
                    <a>About</a>
                    <a>Services</a>
                    <a>Clients</a>
                    <button onClick={this.logoutUser}>LOGOUT</button>
                    <NavLink to="/home">Home</NavLink>
                </div>
                <span className='sidenav-open' onClick={this.openNav}>&#9776;</span>
            </div>
        )
    }
}

export default SideNav;