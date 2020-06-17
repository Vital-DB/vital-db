import React from 'react';
import './splash.css';
import { NavLink } from 'react-router-dom';
import chat from './docchat-icon.png';
import chart from './chart-icon.png';
import remind from './med-remind6.png';
import caduceus from './caduceus2.png';

class Splash extends React.Component {
  

  render() {
    return (
      <div className="splash-container">
        <div className="splash">
          <h1 id="title">
            <img alt="caduceus" src={caduceus} id="caduceus"/>
          </h1>
          <div className="splash-content">
            <section className="feature">
              <h1 id="heading">Store vitals in one place</h1>
                <ul className="vital-list">                
                  <li className="vital">
                    <h3>Name: </h3>
                    <h4>John Doe</h4>
                  </li >             
                <li className="vital">
                  <h3>Blood type: </h3>
                  <h4>O-</h4>
                  </li >
                <li className="vital">
                  <h3>Insurance: </h3>
                  <h4>Metroplus</h4>
                  </li>
                <li className="vital">
                  <h3>Allergies: </h3>
                  <h4>Peanuts, Shellfish</h4>
                  </li>
                <li className="vital">
                  <h3>Medications: </h3>
                  <h4>Escitalopram, <br/> Indapamide</h4>
                  </li>
                </ul>
            </section>
            <section className="feature">
              <h1 id="heading">Connect with your doctor</h1>
              <img src={chat} id="docchat" alt="chat"/>
            </section>
            <section className="feature">
              <h1 id="heading">Easy access to charts</h1>
              <img src={chart} id="chart-icon" alt="chart"/>
            </section>
            <section className="feature">
              <h1 id="heading">Medication reminders</h1>
              <img src={remind} id="med-remind" alt="remind"/>
            </section>
          </div>
        </div>
          <div className="splash-navlinks">
            <NavLink className="splash-nav" to="/login">Login</NavLink>
            <NavLink className="splash-nav" to="/register">Register</NavLink>
          </div>
      </div>
    )
  }
};

export default Splash;