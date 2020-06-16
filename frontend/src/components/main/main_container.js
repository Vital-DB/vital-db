import { connect } from 'react-redux';
import Main from './main';
import { fetchCurrentUser } from '../../actions/session';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);