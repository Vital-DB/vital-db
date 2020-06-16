import { connect } from 'react-redux';
import DashboardStats from './dashboard_stats';

const mapStateToProps = ({session, entities: {vitals}}) => {
    return {
        loggedIn: session.isAuthenticated,
        vitals,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStats);