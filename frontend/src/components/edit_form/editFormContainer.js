import { connect } from 'react-redux';
import EditForm from './editForm';
import { editUser } from '../../actions/session';

const mapStateToProps = state => {
    // debugger;
    return {
        currentUser: state.entities.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: userId => dispatch(editUser(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);