import {
    RECEIVE_VITALS_ERRORS,
    RECEIVE_CHOLESTEROL_LEVEL,
    RECEIVE_WEIGHT,
    RECEIVE_VITAMIN_D_LEVEL,
    RECEIVE_TEMPERATURE,
    RECEIVE_RESTING_HEART_RATE,
    RECEIVE_BLOOD_PRESSURE_LEVEL,

} from "../actions/vitals";

// checking for session errors and updating slice of state
// in the case there are no errors, empty array is returned
export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CHOLESTEROL_LEVEL:
            return [];
        case RECEIVE_WEIGHT:
            return [];
        case RECEIVE_VITAMIN_D_LEVEL:
            return [];
        case RECEIVE_TEMPERATURE:
            return [];
        case RECEIVE_RESTING_HEART_RATE:
            return [];
        case RECEIVE_BLOOD_PRESSURE_LEVEL:
            return [];
        case RECEIVE_VITALS_ERRORS:
            return action.errors;
        default:
            return state;
    }
};