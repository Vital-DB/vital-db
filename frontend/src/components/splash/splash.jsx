import React from 'react';
import './splash.css';
import { NavLink } from 'react-router-dom';
import caduceus from './caduceus2.png';
import choleschart from './chol-chart.png';
import info from './med-info.png';
import roboChat from './robochat.png';
import vitalist from './vitalist.png';
import gitlink from './github-logo.png';
import headshot1 from './headshot1.png';
import headshot2 from './headshot2.png';
import headshot3 from './headshot3.png';
import headshot4 from './headshot4.png';


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
            <li id="member" 
              // onMouseOver={() => { document.getElementById('headshot1').style.dislay = "block"; }}
            // onMouseEnter={document.getElementById('headshot1').style.display = 'block'}
            >
              <a id="alex" href="https://github.com/tongsalex" target="_blank">
                    <img src={gitlink} id="gitlink"/>
                    Alex Tong -- Backend
                  </a>
                    </li>
                      
                    <li id="member">
              <a id="cliff" href="https://github.com/dojobuns" target="_blank">
                      <img src={gitlink} id="gitlink" />
                    Clifford Yan -- Flex
                  </a>
                  </li>
                      
                <li id="member">
              <a id="doug" href="https://github.com/dacraw" target="_blank">
                  <img src={gitlink} id="gitlink" />
                    Doug Crawford -- Team Lead
                  </a>
                </li> 
                      
            <li id="member">
              <a id="nahuel" href="https://github.com/devNahuelOper" target="_blank">
                <img src={gitlink} id="gitlink" />
                    Nahuel Gorosito -- Frontend
                  </a>
            </li>
                </ul>
        </span>
       
        <div className="frame">
            <article id="picture">
            <a href="https://www.linkedin.com/in/tongsalex/" target="_blank">
              <img src={headshot1} id="headshot1" />
            </a>
            </article>
            <article id="picture">
            <a href="https://www.linkedin.com/in/cliffordyan/" target="_blank">
              <img src={headshot2} id="headshot2" />
            </a>
            </article>
            <article id="picture">
            <a href="https://www.linkedin.com/in/doug-a-crawford/" target="_blank">
              <img src={headshot3} id="headshot3" />
            </a>
            </article>
            <article id="picture">
            <a href="https://www.linkedin.com/in/nahuel-gorosito-a2a41524/" target="_blank">
              <img src={headshot4} id="headshot4" />
            </a>
            </article>
        </div>
              

        <details id="disclaimer">
          <summary>Disclaimer:</summary> 
          <p>*None of the information on this website is medically affiliated in any way. Though we actually did research, we are not doctors and this application is purely for web development showcasing purposes only.*</p>
          </details>
      </div>
    )
  }
};

export default Splash;