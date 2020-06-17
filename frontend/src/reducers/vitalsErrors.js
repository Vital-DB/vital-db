import {
    RECEIVE_VITALS_ERRORS,
    RECEIVE_CHOLESTEROL_LEVEL,
} from "../actions/vitals";

// checking for session errors and updating slice of state
// in the case there are no errors, empty array is returned
export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CHOLESTEROL_LEVEL:
            return [];
        case RECEIVE_VITALS_ERRORS:
            return action.errors;
        default:
            return state;
    }
};