import * as VitalsUtil from '../util/vitals'

export const RECEIVE_CHOLESTEROL_LEVELS = "RECEIVE_CHOLESTEROL_LEVELS";
export const RECEIVE_ALLERGIES = "RECEIVE_ALLERGIES";
export const RECEIVE_BLOOD_PRESSURE_LEVELS = "RECEIVE_BLOOD_PRESSURE_LEVELS";
export const RECEIVE_MEDICAL_CONDITIONS = "RECEIVE_MEDICAL_CONDITIONS";
export const RECEIVE_RESTING_HEART_RATES = "RECEIVE_RESTING_HEART_RATES";
export const RECEIVE_TEMPERATURES = "RECEIVE_TEMPERATURES";
export const RECEIVE_VITAMIN_D_LEVELS = "RECEIVE_VITAMIN_D_LEVELS";
export const RECEIVE_WEIGHTS = "RECEIVE_WEIGHTS";
export const RECEIVE_VITALS_ERRORS = "RECEIVE_VITALS_ERRORS";

const receiveCholesterolLevels = (cholesteroLevels) => ({
    type: RECEIVE_CHOLESTEROL_LEVELS,
    cholesteroLevels,
});
const receiveAllergies = (allergies) => ({
    type: RECEIVE_ALLERGIES,
    allergies,
});
const receiveBloodPressureLevels = (bloodPressureLevels) => ({
    type: RECEIVE_BLOOD_PRESSURE_LEVELS,
    bloodPressureLevels,
});
const receiveMedicalConditions = (medicalConditions) => ({
    type: RECEIVE_MEDICAL_CONDITIONS,
    medicalConditions,
});
const receiveRestingHeartRates = (restingHeartRates) => ({
    type: RECEIVE_RESTING_HEART_RATES,
    restingHeartRates,
});
const receiveTemperatures = (temperatures) => ({
    type: RECEIVE_TEMPERATURES,
    temperatures,
});
const receiveVitaminDLevels = (vitaminDLevels) => ({
    type: RECEIVE_VITAMIN_D_LEVELS,
    vitaminDLevels,
});
const receiveWeights = (weights) => ({
    type: RECEIVE_WEIGHTS,
    weights,
});
const receiveVitalsErrors = (errors) => ({
    type: RECEIVE_VITALS_ERRORS,
    errors
});

export const fetchCholesterolLevels = (userId) => dispatch => (
    VitalsUtil.fetchCholesterolLevels(userId)
        .then(
            data => dispatch(receiveCholesterolLevels(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);
export const fetchAllergies = (userId) => dispatch => (
    VitalsUtil.fetchAllergies(userId)
        .then(
            data => dispatch(receiveAllergies(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);
export const fetchBloodPressureLevels = (userId) => dispatch => (
    VitalsUtil.fetchBloodPressureLevels(userId)
        .then(
            data => dispatch(receiveBloodPressureLevels(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);
export const fetchMedicalConditions = (userId) => dispatch => (
    VitalsUtil.fetchMedicalConditions(userId)
        .then(
            data => dispatch(receiveMedicalConditions(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);
export const fetchRestingHeartRates = (userId) => dispatch => (
    VitalsUtil.fetchRestingHeartRates(userId)
        .then(
            data => dispatch(receiveRestingHeartRates(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);
export const fetchTemperatures = (userId) => dispatch => (
    VitalsUtil.fetchTemperatures(userId)
        .then(
            data => dispatch(receiveTemperatures(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);
export const fetchVitaminDLevels = (userId) => dispatch => (
    VitalsUtil.fetchVitaminDLevels(userId)
        .then(
            data => dispatch(receiveVitaminDLevels(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);
export const fetchWeights = (userId) => dispatch => (
    VitalsUtil.fetchWeights(userId)
        .then(
            data => dispatch(receiveWeights(data)),
            errs => dispatch(receiveVitalsErrors(errs))
        )
);