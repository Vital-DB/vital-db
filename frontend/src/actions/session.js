import * as APIUtil from '../util/sessionApi';
import jwt_decode from 'jwt-decode';

export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_CURRENT_USER_INFO = 'RECEIVE_CURRENT_USER_INFO';

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
};

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    }
};

export const loginUser = () => ({
    type: LOGIN_USER
})

const receiveCurrentUserInfo = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER_INFO,
        currentUser,
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutCurrentUser());
};

export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then(user => {
        const { token } = user.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    }).catch(error => {
        
        dispatch(receiveErrors(error.response.data));
    });
};

export const register = (user) => (dispatch) => {
    return APIUtil.register(user).then(() => {
        dispatch(login(user));
    }, (error) => {
        dispatch(receiveErrors(error.response.data));
    });
};

export const fetchCurrentUser = () => dispatch => APIUtil.fetchCurrentUser()
    .then(user => dispatch(receiveCurrentUserInfo(user)));

export const editUser = user => dispatch => APIUtil.editUser(user)
    .then(user => dispatch(receiveCurrentUserInfo(user)));