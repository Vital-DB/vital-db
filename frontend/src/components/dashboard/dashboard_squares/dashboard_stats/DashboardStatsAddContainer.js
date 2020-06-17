import {connect} from 'react-redux'
import {createCholesterolLevel} from '../../../../actions/vitals'
import DashboardStatsAdd from './DashboardStatsAdd'

const mapStateToProps = ({errors: {vitals}}) => {
    return ({
        errors: vitals,
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        createCholesterolLevel: data => dispatch(createCholesterolLevel(data)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStatsAdd)