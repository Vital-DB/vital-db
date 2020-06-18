import {connect} from 'react-redux'
import {
    createCholesterolLevel,
    createWeight,
    createVitaminDLevel,
    createTemperature,
    createRestingHeartRate,
    createBloodPressureLevel,
    createAllergy,
    createMedicalCondition,
    clearVitalsErrors
} from '../../../../actions/vitals'
import DashboardStatsAdd from './DashboardStatsAdd'
import {withRouter} from 'react-router-dom'

const mapStateToProps = ({entities: {vitals},loading: {vitalLoading}, errors}) => {
    return ({
        errors: errors.vitals,
        vitalLoading,
        vitals
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
        createAllergy: data => dispatch(createAllergy(data)),
        createMedicalCondition: data => dispatch(createMedicalCondition(data)),
        clearVitalsErrors: () => dispatch(clearVitalsErrors()),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardStatsAdd))