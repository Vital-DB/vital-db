import {
    RECEIVE_CURRENT_USER,
} from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger;
            return {
                [action.currentUser._id]: action.currentUser,
            }
        default:
            return state;
    }
}