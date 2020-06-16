import { connect } from 'react-redux';
import SideNav from './side_nav';
import { logout } from '../../actions/session';

const mapStateToProps = state => {
    // debugger;
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.entities.user,
    }
}

export default connect(mapStateToProps, {logout})(SideNav);