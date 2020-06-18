import { connect } from 'react-redux';
import SideNav from './side_nav';
import { logout } from '../../actions/session';
import { fetchWeights } from '../../actions/vitals';

const mapStateToProps = state => {
    // debugger;
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.entities.user,
        vitals: state.entities.vitals,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchWeights: () => dispatch(fetchWeights()),
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);