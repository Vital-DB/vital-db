import { connect } from 'react-redux';
import UploadForm from './upload_form';


const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {
 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);