import {
    RECEIVE_CURRENT_USER,
} from '../actions/session';

export default (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
//             debugger;
            return {
                [action.currentUser.data.currentUser._id]: action.currentUser.data.currentUser,
            }
        default:
            return state;
    }
}