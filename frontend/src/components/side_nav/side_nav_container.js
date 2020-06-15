import { connect } from 'react-redux';
import SideNav from './side_nav';
import { logout } from '../../actions/session';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
    }
}

export default connect(mapStateToProps, {logout})(SideNav);