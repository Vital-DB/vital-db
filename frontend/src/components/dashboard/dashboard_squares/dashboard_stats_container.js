import { connect } from 'react-redux';
import DashboardStats from './dashboard_stats';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStats);