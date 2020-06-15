import * as APIUtil from '../util/sessionApi';
import jwt_decode from 'jwt-decode';

export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

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
    return APIUtil.login(user).then((user) => {
        const { token } = user.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        return dispatch(receiveCurrentUser(decoded));
    }, (error) => {
        return dispatch(receiveErrors(error.response.data));
    });
};

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user).then((user) => {
        return dispatch(receiveCurrentUser(user));
    }, (error) => {
        return dispatch(receiveErrors(error.response.data));
    });
};