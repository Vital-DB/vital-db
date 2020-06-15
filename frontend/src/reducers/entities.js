import { combineReducers } from 'redux';
import user from './user';

const entitiesReducer = combineReducers({
    user,
})

export default entitiesReducer;