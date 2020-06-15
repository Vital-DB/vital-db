import React from 'react';
import './splash.css';
import { NavLink } from 'react-router-dom';
// import { Login } from '../session/Login';
// import { Register } from '../session/Register';

class Splash extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="splash-container">
        <div className="splash">
          <h1 id="title">VitalDB</h1>
          <div className="splash-content">
            <section className="feature">Store your vitals in one place
                <ul className="vital-list">                
                  <li className="vital">
                    <h3>Name: </h3>
                    <h4>John Doe</h4>
                  </li >             
                <li className="vital">
                  <h3>Blood type: </h3>
                  <h4>O-negative</h4>
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
                  <h4>Escitalopram, Indapamide</h4>
                  </li>
                </ul>
            </section>
            <section className="feature">Connect with your doctor

            </section>
            <section className="feature">Easy access to medical records

            </section>
            <section className="feature">Medication reminders

            </section>
            {/* <h1 id="heading">All your vitals stored in one secure space</h1> */}
          </div>
        </div>
          <div className="navlinks">
            <NavLink className="NavLink" to="/login">Login</NavLink>
            <NavLink className="NavLink" to="/register">Register</NavLink>
          </div>
      </div>
    )
  }
};

export default Splash;