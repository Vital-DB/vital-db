import {
    START_LOADING_VITALS,
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
    RECEIVE_CHOLESTEROL_LEVELS,
    RECEIVE_CHOLESTEROL_LEVEL,
} from '../actions/vitals';

const initialState = {
    vitalsLoading: false,
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case START_LOADING_VITALS:
            return Object.assign({}, state, { vitalsLoading: true });
        case START_LOADING_VITAL:
            return Object.assign({}, state, { vitalLoading: true });
        case RECEIVE_CHOLESTEROL_LEVELS:
            return Object.assign({}, state, { vitalsLoading: false });
        case RECEIVE_CHOLESTEROL_LEVEL:
            return Object.assign({}, state, { vitalLoading: false });
        case RECEIVE_RESTING_HEART_RATES:
            return Object.assign({}, state, { vitalsLoading: false });
        case RECEIVE_RESTING_HEART_RATE:
            return Object.assign({}, state, { vitalLoading: false });
        case RECEIVE_TEMPERATURES:
            return Object.assign({}, state, { vitalsLoading: false });
        case RECEIVE_TEMPERATURE:
            return Object.assign({}, state, { vitalLoading: false });
        case RECEIVE_VITAMIN_D_LEVELS:
            return Object.assign({}, state, { vitalsLoading: false });
        case RECEIVE_VITAMIN_D_LEVEL:
            return Object.assign({}, state, { vitalLoading: false });
        case RECEIVE_WEIGHTS:
            return Object.assign({}, state, { vitalsLoading: false });
        case RECEIVE_WEIGHT:
            return Object.assign({}, state, { vitalLoading: false });
        case RECEIVE_BLOOD_PRESSURE_LEVELS:
            return Object.assign({}, state, { vitalsLoading: false });
        case RECEIVE_BLOOD_PRESSURE_LEVEL:
            return Object.assign({}, state, { vitalLoading: false });
        default:
            return state;
    }
};

export default loadingReducer;