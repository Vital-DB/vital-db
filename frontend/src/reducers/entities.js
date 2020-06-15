import { combineReducers } from 'redux';
import user from './user';
import cholesterol from './cholesterol'
import bloodPressure from './bloodPressure'
import weight from './weight.js'
import vitaminD from './vitaminD'
import restingHeartRate from './restingHeartRate'
import temperature from './temperature'
import allergy from './allergy'
import medicalCondition from './medicalCondition'

const entitiesReducer = combineReducers({
    user,
    cholesterol,
    bloodPressure,
    weight,
    vitaminD,
    restingHeartRate,
    temperature,
    allergy,
    medicalCondition,
})

export default entitiesReducer;