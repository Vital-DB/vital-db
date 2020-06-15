import { connect } from 'react-redux';
import Dashboard from './dashboard';


const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {
 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);