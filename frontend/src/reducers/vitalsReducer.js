import {
    RECEIVE_CHOLESTEROL_LEVELS,
    RECEIVE_ALLERGIES, 
    RECEIVE_BLOOD_PRESSURE_LEVELS, 
    RECEIVE_MEDICAL_CONDITIONS,
    RECEIVE_RESTING_HEART_RATES,
    RECEIVE_TEMPERATURES,
    RECEIVE_VITAMIN_D_LEVELS,
    RECEIVE_WEIGHTS,
    CLEAR_VITALS,
} from '../actions/vitals'
import {merge} from 'lodash'

const _nullState = {
    cholesterolLevels: [],
    allergies: [],
    bloodPressureLevels: [],
    medicalConditions: [],
    restingHeartRates: [],
    temperatures: [],
    vitaminDLevels: [],
    weights: [],
}

export default (state = _nullState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHOLESTEROL_LEVELS:
            return merge({}, state, {cholesterolLevels: action.cholesterolLevels} )
        case RECEIVE_ALLERGIES:
            return merge({}, state, {allergies: action.allergies} )
        case RECEIVE_BLOOD_PRESSURE_LEVELS:
            return merge({}, state, {bloodPressureLevels: action.bloodPressureLevels} )
        case RECEIVE_MEDICAL_CONDITIONS:
            return merge({}, state, {medicalConditions: action.medicalConditions} )
        case RECEIVE_RESTING_HEART_RATES:
            return merge({}, state, {restingHeartRates: action.restingHeartRates} )
        case RECEIVE_TEMPERATURES:
            return merge({}, state, {temperatures: action.temperatures} )
        case RECEIVE_VITAMIN_D_LEVELS:
            return merge({}, state, {vitaminDLevels: action.vitaminDLevels} )
        case RECEIVE_WEIGHTS:
            return merge({}, state, {weights: action.weights} )
        case CLEAR_VITALS:
            return _nullState;
        default:
            return state;
    }
}