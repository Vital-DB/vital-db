import * as VitalsUtil from '../util/vitalsApi'

export const RECEIVE_CHOLESTEROL_LEVELS = "RECEIVE_CHOLESTEROL_LEVELS";
export const RECEIVE_CHOLESTEROL_LEVEL = "RECEIVE_CHOLESTEROL_LEVEL";
export const RECEIVE_BLOOD_PRESSURE_LEVELS = "RECEIVE_BLOOD_PRESSURE_LEVELS";
export const RECEIVE_BLOOD_PRESSURE_LEVEL = "RECEIVE_BLOOD_PRESSURE_LEVEL";
export const RECEIVE_RESTING_HEART_RATES = "RECEIVE_RESTING_HEART_RATES";
export const RECEIVE_RESTING_HEART_RATE = "RECEIVE_RESTING_HEART_RATE";
export const RECEIVE_TEMPERATURES = "RECEIVE_TEMPERATURES";
export const RECEIVE_TEMPERATURE = "RECEIVE_TEMPERATURE";
export const RECEIVE_VITAMIN_D_LEVELS = "RECEIVE_VITAMIN_D_LEVELS";
export const RECEIVE_VITAMIN_D_LEVEL = "RECEIVE_VITAMIN_D_LEVEL";
export const RECEIVE_WEIGHTS = "RECEIVE_WEIGHTS";
export const RECEIVE_WEIGHT = "RECEIVE_WEIGHT";
export const RECEIVE_ALLERGIES = "RECEIVE_ALLERGIES";
export const RECEIVE_MEDICAL_CONDITIONS = "RECEIVE_MEDICAL_CONDITIONS";
export const RECEIVE_VITALS_ERRORS = "RECEIVE_VITALS_ERRORS";
export const CLEAR_VITALS = "CLEAR_VITALS";
export const START_LOADING_VITALS = "START_LOADING_VITALS";
export const START_LOADING_VITAL = "START_LOADING_VITAL";

const receiveCholesterolLevels = (cholesterolLevels) => {
    return { 
        type: RECEIVE_CHOLESTEROL_LEVELS,
        cholesterolLevels,
    }
};
const receiveCholesterolLevel = (cholesterolLevel) => {
    
    return { 
        type: RECEIVE_CHOLESTEROL_LEVEL,
        cholesterolLevel,
    }
};
const receiveAllergies = (allergies) => ({
    type: RECEIVE_ALLERGIES,
    allergies,
});
const receiveBloodPressureLevels = (bloodPressureLevels) => ({
    type: RECEIVE_BLOOD_PRESSURE_LEVELS,
    bloodPressureLevels,
});
const receiveBloodPressureLevel = (bloodPressureLevel) => ({
    type: RECEIVE_BLOOD_PRESSURE_LEVEL,
    bloodPressureLevel,
});
const receiveMedicalConditions = (medicalConditions) => ({
    type: RECEIVE_MEDICAL_CONDITIONS,
    medicalConditions,
});
const receiveRestingHeartRates = (restingHeartRates) => ({
    type: RECEIVE_RESTING_HEART_RATES,
    restingHeartRates,
});
const receiveRestingHeartRate = (restingHeartRate) => ({
    type: RECEIVE_RESTING_HEART_RATE,
    restingHeartRate,
});
const receiveTemperatures = (temperatures) => ({
    type: RECEIVE_TEMPERATURES,
    temperatures,
});
const receiveTemperature = (temperature) => ({
    type: RECEIVE_TEMPERATURE,
    temperature,
});
const receiveVitaminDLevels = (vitaminDLevels) => ({
    type: RECEIVE_VITAMIN_D_LEVELS,
    vitaminDLevels,
});
const receiveVitaminDLevel = (vitaminDLevel) => ({
    type: RECEIVE_VITAMIN_D_LEVEL,
    vitaminDLevel,
});
const receiveWeights = (weights) => {
    return {
        type: RECEIVE_WEIGHTS,
        weights,
    }
};
const receiveWeight = (weight) => {
    return {
        type: RECEIVE_WEIGHT,
        weight,
    }
};
const receiveVitalsErrors = (errors) => ({
    type: RECEIVE_VITALS_ERRORS,
    errors
});
export const startLoadingVitals = () => ({
    type: START_LOADING_VITALS,
});
export const startLoadingVital = () => ({
    type: START_LOADING_VITAL,
});

export const fetchCholesterolLevels = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchCholesterolLevels()
        .then(
            res => dispatch(receiveCholesterolLevels(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.message))
        )
};
export const createCholesterolLevel = (data) => dispatch => {
    dispatch(startLoadingVital());    
    return VitalsUtil.createCholesterolLevel(data)
        .then(
            res => dispatch(receiveCholesterolLevel(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.response.data.errors))
        )
};
export const fetchAllergies = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchAllergies()
        .then(
            res => dispatch(receiveAllergies(res.data)),
            errors => dispatch(receiveVitalsErrors(errors))
        )
};

export const fetchBloodPressureLevels = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchBloodPressureLevels()
        .then(
            res => dispatch(receiveBloodPressureLevels(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.message))
        )
};
export const createBloodPressureLevel = (data) => dispatch => {
    dispatch(startLoadingVital());
    return VitalsUtil.createBloodPressureLevel(data)
        .then(
            res => dispatch(receiveBloodPressureLevel(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.response.data.errors))
        )
};
export const fetchMedicalConditions = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchMedicalConditions()
        .then(
            res => dispatch(receiveMedicalConditions(res.data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
};
export const fetchRestingHeartRates = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchRestingHeartRates()
        .then(
            res => dispatch(receiveRestingHeartRates(res.data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
};
export const createRestingHeartRate = (data) => dispatch => {
    dispatch(startLoadingVital());
    return VitalsUtil.createRestingHeartRate(data)
        .then(
            res => dispatch(receiveRestingHeartRate(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.response.data.errors))
        )
};
export const fetchTemperatures = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchTemperatures()
        .then(
            res => dispatch(receiveTemperatures(res.data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
};
export const createTemperature = (data) => dispatch => {
    dispatch(startLoadingVital());
    return VitalsUtil.createTemperature(data)
        .then(
            res => dispatch(receiveTemperature(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.response.data.errors))
        )
};
export const fetchVitaminDLevels = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchVitaminDLevels()
        .then(
            res => dispatch(receiveVitaminDLevels(res.data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
};
export const createVitaminDLevel = (data) => dispatch => {
    dispatch(startLoadingVital());
    return VitalsUtil.createVitaminDLevel(data)
        .then(
            res => dispatch(receiveVitaminDLevel(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.response.data.errors))
        )
};
export const fetchWeights = () => dispatch => {
    dispatch(startLoadingVitals());
    return VitalsUtil.fetchWeights()
        .then(
            res => dispatch(receiveWeights(res.data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
};
export const createWeight = (data) => dispatch => {
    dispatch(startLoadingVital());
    return VitalsUtil.createWeight(data)
        .then(
            res => dispatch(receiveWeight(res.data)),
            errs => dispatch(receiveVitalsErrors(errs.response.data.errors))
        )
};