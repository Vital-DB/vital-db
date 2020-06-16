import { combineReducers } from 'redux';
import user from './user';
import vitals from './vitalsReducer'

const entitiesReducer = combineReducers({
    user,
    vitals,
})

export default entitiesReducer;