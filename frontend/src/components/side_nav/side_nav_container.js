import { connect } from 'react-redux';
import SideNav from './side_nav';
import { logout } from '../../actions/session';

const mapStateToProps = state => {
    
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: {
            firstName: 'Clifford',
            lastName: 'Yan',
            sex: 'm',
            birthday: new Date('03/10/1995'),
            bloodType: 'O+',
            weight: 200,
            height: 72,
        }
    }
}

export default connect(mapStateToProps, {logout})(SideNav);