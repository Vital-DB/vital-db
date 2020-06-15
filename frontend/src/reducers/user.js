import {
    RECEIVE_CURRENT_USER,
} from "../actions/session";

// when there is no user logged in (page startup/logout/etc.)
const _nullState = Object.freeze({
    name: "",
    birthday: "",
    bloodType: "",
    currentWeight: "",
    height: "",
    picture: "",
    cholesterol: [
        {date: "", value: ""},
    ],
    bloodPressure: [
        {date: "", value: ""},
    ],
    weight: [
        {date: "", value: ""}
    ],
    vitaminD: [
        {date: "", value: ""}
    ],
    restingHeartRate: [
        {date: "", value: ""}
    ],
    temperature: [
        {date: "", value: ""}
    ],
    allergies: [
        {date: "", value: ""}
    ],
});

// reducer to change the state based off action given
// takes in old state & new action and returns a modified new state slice
export default (state = _nullState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return _nullState;
            // return action.user
        default:
            return state;
    }
};