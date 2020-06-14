import { combineReducers } from 'redux';
import session from './session';
import errors from './sessionErrors';

const appReducer = combineReducers({
    session,
    errors,
})

const rootReducer = (state, action) => {
    // resets state when user logouts
    if (action.type === 'LOGOUT_CURRENT_USER') {
      state = undefined;
    }
    
    return appReducer(state, action);
};

export default rootReducer;