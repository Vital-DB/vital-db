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
        fetchWeights: () => dispatch(fetchWeights()),
        fetchCholesterolLevels: () => dispatch(fetchCholesterolLevels()),
        fetchBloodPressureLevels: () => dispatch(fetchBloodPressureLevels()),
        fetchRestingHeartRates: () => dispatch(fetchRestingHeartRates()),
        fetchTemperatures: () => dispatch(fetchTemperatures()),
        fetchVitaminDLevels: () => dispatch(fetchVitaminDLevels()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStats);