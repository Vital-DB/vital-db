import { connect } from 'react-redux';
import Main from './main';
import { fetchCurrentUser } from '../../actions/session';

const mapStateToProps = state => {
    // debugger;
    return {
        loggedIn: state.session.isAuthenticated,
        handle: state.session.user.handle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);