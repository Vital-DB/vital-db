import {
    RECEIVE_CHOLESTEROL_LEVELS,
    RECEIVE_CHOLESTEROL_LEVEL,
    RECEIVE_BLOOD_PRESSURE_LEVELS, 
    RECEIVE_BLOOD_PRESSURE_LEVEL, 
    RECEIVE_RESTING_HEART_RATES,
    RECEIVE_RESTING_HEART_RATE,
    RECEIVE_TEMPERATURES,
    RECEIVE_TEMPERATURE,
    RECEIVE_VITAMIN_D_LEVELS,
    RECEIVE_VITAMIN_D_LEVEL,
    RECEIVE_WEIGHTS,
    RECEIVE_WEIGHT,
    RECEIVE_ALLERGIES, 
    RECEIVE_ALLERGY,
    REMOVE_ALLERGY,
    UPDATE_ALLERGY,
    RECEIVE_MEDICAL_CONDITIONS,
    RECEIVE_MEDICAL_CONDITION,
    CLEAR_VITALS,
} from '../actions/vitals'
import {merge} from 'lodash'

const _nullState = {
    cholesterolLevels: [],
    allergies: {},
    bloodPressureLevels: [],
    medicalConditions: [],
    restingHeartRates: [],
    temperatures: [],
    vitaminDLevels: [],
    weights: [],
}

export default (state = _nullState, action) => {
    Object.freeze(state);
    let newVital, newState;
    switch (action.type) {
        case RECEIVE_CHOLESTEROL_LEVELS:
            // debugger
            let vitals = action.cholesterolLevels;
            // vitals.map(vital => );
            return merge({}, state, {cholesterolLevels: action.cholesterolLevels} )
        case RECEIVE_CHOLESTEROL_LEVEL:
            newVital = action.cholesterolLevel;
            newState = merge({}, state);
            newState['cholesterolLevels'].push(newVital);
            return merge({}, state, newState )
        case RECEIVE_BLOOD_PRESSURE_LEVELS:
            return merge({}, state, {bloodPressureLevels: action.bloodPressureLevels} )
        case RECEIVE_BLOOD_PRESSURE_LEVEL:
            newVital = action.bloodPressureLevel;
            newState = merge({}, state);
            newState['bloodPressureLevels'].push(newVital);
            return merge({}, state, newState )            
        case RECEIVE_RESTING_HEART_RATES:
            return merge({}, state, {restingHeartRates: action.restingHeartRates} )
        case RECEIVE_RESTING_HEART_RATE:
            newVital = action.restingHeartRate;
            newState = merge({}, state);
            newState['restingHeartRates'].push(newVital);
            return merge({}, state, newState )  
        case RECEIVE_TEMPERATURES:
            return merge({}, state, {temperatures: action.temperatures} )
        case RECEIVE_TEMPERATURE:
            newVital = action.temperature;
            newState = merge({}, state);
            newState['temperatures'].push(newVital);
            return merge({}, state, newState )  
        case RECEIVE_VITAMIN_D_LEVELS:
            return merge({}, state, {vitaminDLevels: action.vitaminDLevels} )
        case RECEIVE_VITAMIN_D_LEVEL:
            newVital = action.vitaminDLevel;
            newState = merge({}, state);
            newState['vitaminDLevels'].push(newVital);
            return merge({}, state, newState )  
        case RECEIVE_WEIGHTS:
            return merge({}, state, {weights: action.weights} )
        case RECEIVE_WEIGHT:
            newVital = action.weight;
            newState = merge({}, state);
            newState['weights'].push(newVital);
            return merge({}, state, newState )  
        case RECEIVE_ALLERGIES:
            const allergies = {};
            action.allergies.forEach(allergy => {
                allergies[allergy._id] = allergy;
            })
            return merge({}, state, {allergies: allergies} )
        case RECEIVE_ALLERGY:
            return merge({}, state, {allergies: {[action.allergy._id]: action.allergy}})
            // newVital = action.allergy;
            // newState = merge({}, state);
            // newState['allergies'].push(newVital);
            // return merge({}, state, newState )  
        case REMOVE_ALLERGY:
            debugger
            newState = merge({}, state);
            delete newState.allergies[action.allergyID]
            return newState;
        case RECEIVE_MEDICAL_CONDITIONS:
            return merge({}, state, {medicalConditions: action.medicalConditions} )            
        case RECEIVE_MEDICAL_CONDITION:
            newVital = action.medicalCondition;
            newState = merge({}, state);
            newState['medicalConditions'].push(newVital);
            return merge({}, state, newState )          
        case CLEAR_VITALS:
            return _nullState;
        default:
            return state;
    }
}