import React from 'react';
import './side_nav.css';
import {NavLink} from 'react-router-dom'
import { dateFormatter, heightFormatter } from '../../util/helper_util';
import danc from './danc.png';
import dancSurprise from './danc-surprise.png';

class SideNav extends React.Component {
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.changeGreeting = this.changeGreeting.bind(this); 
        
        this.state = { bool: true, greeting: '', sources: '', };
    }

    componentDidMount(){
        this.props.fetchWeights();
        const date = new Date();
        const hours = date.getHours();
        const { handle } = this.props;
        if(this.state.bool){
            if(hours >= 4 && hours <= 5) {
                this.setState({ greeting: `Wow ${handle}, you're up early!`});
            } else if(hours < 12 && hours >= 6) {
                this.setState({ greeting: `Good morning ${handle}!`});
            } else if (hours >= 12 && hours <= 17) {
                this.setState({ greeting: `Good afternoon ${handle}!`});
            } else if (hours > 17 && hours <= 21) {
                this.setState({ greeting: `Good evening ${handle}`});
            } else if (hours >= 22 && hours <= 24) {
                this.setState({ greeting: `Good night ${handle}!`});
            } else if (hours >= 1 && hours <= 3) {
                this.setState({ greeting: `Sleeping is for humans as recharging is for robots!`});
            }
        }
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

    changeGreeting(){
        const greetings = [
            'Normal total cholesterol levels for adults without heart disease is less than 200mg/dL',
            'Coffee is high in antioxidants!',
            'Fish is a great source of high-quality protein and healthy fat',
            'Poor sleep can reduce your physical and mental performance',
            'General rule of thumb is to drink two to three cups of water per hour',
            'Try to get at least 150 minutes of exercise in each week!',
            'Avoid bright lights before sleeping to get quality sleep',
            'Vitamin D is important, take vitamin D3 if you are not outside enough',
            'Studies show that smoking takes at least 10 years off of life expectancy',
            'Remember to get up and stretch!',
            'Remember to wash your hands, we are in an epidemic!!',
            'That tickles! Try again',
            'The WHO recommends wearing a mask when going outside',
            'Maintain social distancing of 6 feet from others not from the same household',
            'Who is WHO? WHO stands for World Health Organization!',
            'NIH stands for National Institutes of Health',
            'Remember to get your flu shots each year!',
            'Statistically, 9 out of 10 injections are in vein',
            'Remember to take breaks!',
            'I once heard a joke about amnesia, but I forgot how it goes',
            'I don’t find health-related puns funny anymore since I started suffering from an irony deficiency',
            '“The worst time to have a heart attack is during a game of charades',
        ];

        let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

        while(randomGreeting === this.state.greeting){
            randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        }

        if(randomGreeting === greetings[0]) {
            this.setState({sources: 'https://www.healthywomen.org/condition/cholesterol#:~:text=A%20normal%20total%20cholesterol%20level,risk%20factor%20for%20heart%20disease.'})
        } else if(randomGreeting === greetings[6] || randomGreeting === greetings[7] || randomGreeting === greetings[2]){
            this.setState({sources: 'https://www.healthline.com/nutrition/27-health-and-nutrition-tips#section10'})
        } else if(randomGreeting === greetings[8]) {
            this.setState({sources: 'https://www.usatoday.com/story/news/nation/2013/01/23/smoking-cessation-life-expectancy/1858913/'})
        } else if(randomGreeting === greetings[19] || randomGreeting === greetings[20] || randomGreeting === greetings[21] || randomGreeting === greetings[17]) {
            this.setState({sources: 'https://www.aimseducation.edu/blog/medical-puns-jokes-and-one-liners/'})
        } else {
            this.setState({sources: ''})
        }
        this.setState({ greeting: randomGreeting, bool: false, });
    }
    render(){
        let hiding = 'Oh, You found me! Click on me to show sidebar!';
        let source = '';
        if(this.state.sources.length > 0){
            source = 'source';
        }

        return (
            <div>
                <div id='my-sidenav' className='sidenav'>
                    <a className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div className='danc-talk'>
                        <div className='speech-bubble'>
                            <div>
                                {this.state.greeting}
                            </div>
                            <a target='_blank' className='bubble-source' href={this.state.sources}>
                                {source}
                            </a>
                        </div>
                        <img src={danc} width='100' height='140' onClick={this.changeGreeting} className='danc' alt=""/>
                        <div className="arrow bounce">
                            <i className="fa fa-sort-up fa-2x"></i>
                        </div>
                        <div className='arrow-text'>Press on me for helpful info!</div>
                    </div>
                    <div className='sidenav-link-group'>
                        <div className='sidenav-links'>
                            <NavLink to="/main/dashboard" id='sidenav-home-link'><i class="fas fa-chart-area"></i>Dashboard</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to="/main/profile" id='sidenav-edit-link'><i className="fas fa-user"></i>View Profile</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to='/main/allergies' id='sidenav-allergy-link'><i className="fas fa-allergies"></i>Allergies</NavLink>
                        </div>
                        <div className='sidenav-links'>
                            <NavLink to="/main/checkup/history" id='sidenav-history-link'><i className="fas fa-notes-medical"></i>Checkup History</NavLink>
                        </div>
                        {/* <div className='sidenav-links'>
                            <NavLink to="/main/vaccinations" id='sidenav-vaccination-link'><i className="fas fa-syringe"></i>Vaccinations</NavLink>
                        </div> */}
                        {/* <div className='sidenav-links'>
                            <NavLink to="/main/prescriptions" id='sidenav-prescription-link'><i className="fas fa-capsules"></i>Medications</NavLink>
                        </div> */}
                    <button className='sidenav-logout' onClick={this.logoutUser}>LOGOUT</button>
                    </div>
                    
                    
                    
                </div>
                <div className='danc-talk-2'>
                    <div className='speech-bubble-2'>{hiding}</div>
                    <img src={dancSurprise} width='100' height='140' onClick={this.openNav} className='danc' alt=""/>
                </div>
            </div>
        )
    }
}

export default SideNav;