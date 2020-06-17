import { combineReducers } from 'redux';
import session from './session';
import errors from './sessionErrors';
import entities from './entities';
import loading from './loadingReducer'

const appReducer = combineReducers({
    session,
    errors,
    entities,
    loading
})

const rootReducer = (state, action) => {
    // resets state when user logouts
    if (action.type === 'LOGOUT_CURRENT_USER') {
      state = undefined;
    }
    
    return appReducer(state, action);
};

export default rootReducer;