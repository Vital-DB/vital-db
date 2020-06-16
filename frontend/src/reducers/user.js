import {
    RECEIVE_CURRENT_USER_INFO,
} from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER_INFO:
            
            return action.currentUser.data.currentUser;
        default:
            return state;
    }
}