import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => {
    // debugger;
    return {
        user: state.entities.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);