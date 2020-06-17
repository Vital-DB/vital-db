import {connect} from 'react-redux'
import {
    createCholesterolLevel,
    // createWeight,
    // createVitaminDLevel,
    // createTemperature,
    // createRestingHeartRate,
    // createBloodPressureLevel,
} from '../../../../actions/vitals'
import DashboardStatsAdd from './DashboardStatsAdd'

const mapStateToProps = ({errors: {vitals}}) => {
    return ({
        errors: vitals,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        createCholesterolLevel: data => dispatch(createCholesterolLevel(data)),
        // createWeight: data => dispatch(createWeight(data)),
        // createVitaminDLevel: data => dispatch(createVitaminDLevel(data)),
        // createTemperature: data => dispatch(createTemperature(data)),
        // createRestingHeartRate: data => dispatch(createRestingHeartRate(data)),
        // createBloodPressureLevel: data => dispatch(createCholesterolLevel(data)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStatsAdd)