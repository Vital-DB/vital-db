import { connect } from 'react-redux';
import Main from './main';


const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {
 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);