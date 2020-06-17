import sessionErrors from './sessionErrors'
import vitalsErrors from './vitalsErrors'
import {combineReducers} from 'redux'

export default combineReducers({
    session: sessionErrors,
    vitals: vitalsErrors,
})