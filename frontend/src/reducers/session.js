import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../actions/session";

// when there is no user logged in (page startup/logout/etc.)
const _nullUser = Object.freeze({
    isAuthenticated: false,
    user: {}
});

// reducer to change the state based off action given
// takes in old state & new action and returns a modified new state slice
export default (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                isSignedIn: true,
                user: action.currentUser
            };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};