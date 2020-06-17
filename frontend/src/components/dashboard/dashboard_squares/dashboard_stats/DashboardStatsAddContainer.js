import {connect} from 'react-redux'
import {
    createCholesterolLevel,
    createWeight,
    createVitaminDLevel,
    createTemperature,
    createRestingHeartRate,
    createBloodPressureLevel,
} from '../../../../actions/vitals'
import DashboardStatsAdd from './DashboardStatsAdd'

const mapStateToProps = ({loading: {vitalsLoading}, errors: {vitals}}) => {
    return ({
        errors: vitals,
        vitalsLoading,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        createCholesterolLevel: data => dispatch(createCholesterolLevel(data)),
        createWeight: data => dispatch(createWeight(data)),
        createVitaminDLevel: data => dispatch(createVitaminDLevel(data)),
        createTemperature: data => dispatch(createTemperature(data)),
        createRestingHeartRate: data => dispatch(createRestingHeartRate(data)),
        createBloodPressureLevel: data => dispatch(createBloodPressureLevel(data)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStatsAdd)