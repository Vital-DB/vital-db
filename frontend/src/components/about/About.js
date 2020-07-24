import React from 'react';
import './about.css';

export default () => {
    return (
        <div className='about'>
            <section className='about__bio'>
                <img src="https://avatars0.githubusercontent.com/u/21978330?s=460&u=a8dea8d9e1f18aa9f3e0ea489090f4fc1531453b&v=4" className='about__profilePic' />
                    <h1>Alex Tong</h1>
                    <h1>Backend Lead</h1>
                    <div className="about__linksContainer">
                        <a href="http://tongsalex.com" 
                        target="_blank" 
                        className="about__links">Portfolio</a>
                        <a href="http://linkedin.com/in/tongsalex" 
                        target="_blank"
                        className="about__links">LinkedIn</a>
                        <a href="http://github.com/tongsalex" 
                        target="_blank"
                        className="about__links">GitHub</a>
                    </div>
            </section>

            <section className='about__bio'>
                <img src="https://avatars0.githubusercontent.com/u/59629330?s=400&u=ae2b51f6beab4c89e1d2d6f5d1a6cb9eaf33f9dd&v=4" className='about__profilePic' />
                    <h1>Douglas Crawford</h1>
                    <h1>Team Lead</h1>
                    <div className="about__linksContainer">
                        <a href="https://dacraw.github.io/" 
                        target="_blank" 
                        className="about__links">Portfolio</a>
                        <a href="https://www.linkedin.com/in/doug-a-crawford/" 
                        target="_blank"
                        className="about__links">LinkedIn</a>
                        <a href="http://github.com/dacraw" 
                        target="_blank"
                        className="about__links">GitHub</a>
                    </div>
            </section>

            <section className='about__bio'>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHjeCAQxd_esQ/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=tgSOZswo0FxhAZOOqFA__ECrJxajlm8Wz0geXXLadzQ" className='about__profilePic' />
                    <h1>Clifford Yan</h1>
                    <h1>Flex</h1>
                    <div className="about__linksContainer">
                        <a href="https://dojobuns.github.io/" 
                        target="_blank" 
                        className="about__links">Portfolio</a>
                        <a href="https://www.linkedin.com/in/cliffordyan/" 
                        target="_blank"
                        className="about__links">LinkedIn</a>
                        <a href="https://github.com/dojobuns" 
                        target="_blank"
                        className="about__links">GitHub</a>
                    </div>
            </section>

            <section className='about__bio'>
              <img src="https://avatars1.githubusercontent.com/u/16979527?s=400&u=97a69e78167b0215e15d11fd3916af831bc611a0&v=4" className='about__profilePic' />
                    <h1>Nahuel Gorosito</h1>
                    <h1>Frontend Lead</h1>
                    <div className="about__linksContainer">
                        <a href="https://devnahueloper.github.io/" 
                        target="_blank" 
                        className="about__links">Portfolio</a>
                        <a href="https://www.linkedin.com/in/nahuel-gorosito-a2a41524/" 
                        target="_blank"
                        className="about__links">LinkedIn</a>
                        <a href="https://github.com/devNahuelOper" 
                        target="_blank"
                        className="about__links">GitHub</a>
                    </div>
            </section>
        </div>
    )
}
