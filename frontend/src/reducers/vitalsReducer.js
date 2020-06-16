import {RECEIVE_CHOLESTEROL_LEVELS} from '../actions/vitals'
import {merge} from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHOLESTEROL_LEVELS:

            return merge({}, state, {cholesterolLevels: action.cholesterolLevels} )
        default:
            return state;
    }
}