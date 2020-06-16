import { connect } from 'react-redux';
import DashboardStats from './dashboard_stats';
import {
    fetchWeights,
    fetchCholesterolLevels,
    fetchBloodPressureLevels,
    fetchRestingHeartRates,
    fetchTemperatures,
    fetchVitaminDLevels,
} from '../../../../actions/vitals'

const mapStateToProps = ({session, entities: {vitals}}) => {
    return {
        loggedIn: session.isAuthenticated,
        userId: session.user.id,
        vitals,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWeights: (userId) => dispatch(fetchWeights(userId)),
        fetchCholesterolLevels: (userId) => dispatch(fetchCholesterolLevels(userId)),
        fetchBloodPressureLevels: (userId) => dispatch(fetchBloodPressureLevels(userId)),
        fetchRestingHeartRates: (userId) => dispatch(fetchRestingHeartRates(userId)),
        fetchTemperatures: (userId) => dispatch(fetchTemperatures(userId)),
        fetchVitaminDLevels: (userId) => dispatch(fetchVitaminDLevels(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStats);