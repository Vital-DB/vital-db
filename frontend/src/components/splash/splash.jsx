import React from 'react';
import './splash.css';
import { NavLink } from 'react-router-dom';
import chat from './docchat-icon.png';
// import chart from './chart-icon.png';
// import remind from './med-remind6.png';
import caduceus from './caduceus2.png';
import choleschart from './chol-chart.png';
import info from './med-info.png';
import roboChat from './robo-chat.png';
import vitalist from './vitalist.png';
import gitlink from './github-logo.png';

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
              <img src={vitalist} id="vitalist"/>
                {/* <ul className="vital-list">                
                  <li className="vital">
                    <h3>Name: </h3>
                    <h4>Demo Nanaan</h4>
                  </li > 
                <li className="vital">
                  <h3>Height: </h3>
                  <h4>6'0''</h4>
                </li >
                <li className="vital">
                  <h3>Weight: </h3>
                  <h4>180lbs</h4>
                </li >         
                <li className="vital">
                  <h3>Blood type: </h3>
                  <h4>O-</h4>
                  </li >
                <li className="vital">
                  <h3>LDL: </h3>
                  <h4>90 mg/dL</h4>
                  </li>
                <li className="vital">
                  <h3>HDL: </h3>
                  <h4>60 mg/dL</h4>
                </li>
              
                </ul> */}
            </section>
            <section className="feature">
              <h1 id="heading">Talk vitals with Roboctor</h1>
              <img src={roboChat} id="robochat" alt="chat"/>
            </section>
            <section className="feature">
              <h1 id="heading">Track vitals in real-time</h1>
              <img src={choleschart} id="chart-icon" alt="chart"/>
            </section>
            <section className="feature">
              <h1 id="heading">Show vital descriptors</h1>
              <img src={info} id="info" alt="info"/>
            </section>
          </div>
        </div>
          <div className="splash-navlinks">
            <NavLink className="splash-nav" to="/login">Login</NavLink>
            <NavLink className="splash-nav" to="/register">Register</NavLink>
          </div>
              <span>
                <ul className="team">
                  <li id="member">
                  <a href="https://github.com/tongsalex">
                    <img src={gitlink} id="gitlink"/>
                    Alex Tong -- Backend
                  </a>
                    </li>
                    
                    <li id="member">
                    <a href="https://github.com/dojobuns">
                      <img src={gitlink} id="gitlink" />
                    Cliff Yan -- Flex
                  </a>
                  </li>
                <li id="member">
                <a href="https://github.com/dacrawford89">
                  <img src={gitlink} id="gitlink" />
                    Doug Crawford -- Team Lead
                  </a>
                </li>
            <li id="member">
              <a href="https://github.com/devNahuelOper">
                <img src={gitlink} id="gitlink" />
                    Nahuel Gorosito -- Frontend
                  </a>
            </li>
                </ul>
              </span>

        <details id="disclaimer">
          <summary>Disclaimer:</summary> 
          <p>*None of the information on this website is medically affiliated in any way. Though we actually did research, we are not doctors and this application is purely for web development showcasing purposes only.*</p>
          </details>
      </div>
    )
  }
};

export default Splash;