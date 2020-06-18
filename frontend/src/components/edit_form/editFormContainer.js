import { connect } from 'react-redux';
import EditForm from './editForm';
import { editUser } from '../../actions/session';
import { createWeight } from '../../actions/vitals';

const mapStateToProps = state => {
    
    return {
        currentUser: state.entities.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: userId => dispatch(editUser(userId)),
        createWeight: weight => dispatch(createWeight(weight)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);