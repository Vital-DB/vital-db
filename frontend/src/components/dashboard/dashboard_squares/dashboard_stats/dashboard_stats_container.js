import { connect } from 'react-redux';
import DashboardStats from './dashboard_stats';
import {
    fetchWeights,
    fetchCholesterolLevels,
    fetchBloodPressureLevels,
    fetchRestingHeartRates,
    fetchTemperatures,
    fetchVitaminDLevels,
    startLoadingVitals,
    doneLoadingVitals,

} from '../../../../actions/vitals'

const mapStateToProps = ({loading: {vitalsLoading}, session, entities: {vitals}}) => {
    return {
        loggedIn: session.isAuthenticated,
        userId: session.user.id,
        vitalsLoading,
        vitals,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startLoadingVitals: () => dispatch(startLoadingVitals()),
        doneLoadingVitals: () => dispatch(doneLoadingVitals()),
        fetchWeights: () => dispatch(fetchWeights()),
        fetchCholesterolLevels: () => dispatch(fetchCholesterolLevels()),
        fetchBloodPressureLevels: () => dispatch(fetchBloodPressureLevels()),
        fetchRestingHeartRates: () => dispatch(fetchRestingHeartRates()),
        fetchTemperatures: () => dispatch(fetchTemperatures()),
        fetchVitaminDLevels: () => dispatch(fetchVitaminDLevels()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStats);