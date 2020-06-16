import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => {
    
    return {
        user: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);