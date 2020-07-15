import { connect } from 'react-redux';
import Main from './main';
import { fetchCurrentUser } from '../../actions/session';
import {clearVitalsErrors} from '../../actions/vitals'

const mapStateToProps = state => {

    return {
        loggedIn: state.session.isAuthenticated,
        handle: state.session.user.handle,
        user: state.entities.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
        clearVitalsErrors: () => dispatch(clearVitalsErrors()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);