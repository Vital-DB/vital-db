import React from 'react';
import './side_nav.css';

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
    }

    closeNav() {
        document.getElementById("my-sidenav").style.width = "0";
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
                </div>
                <span className='sidenav-open' onClick={this.openNav}>&#9776;</span>
            </div>
        )
    }
}

export default SideNav;