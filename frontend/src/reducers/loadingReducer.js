import {
    START_LOADING_VITALS,
    DONE_LOADING_VITALS,
} from '../actions/vitals';

const initialState = {
    vitalsLoading: false,
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case START_LOADING_VITALS:
            return Object.assign({}, state, { vitalsLoading: true });
        case DONE_LOADING_VITALS:
            return Object.assign({}, state, { vitalsLoading: false });
        default:
            return state;
    }
};

export default loadingReducer;