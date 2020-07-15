import axios from 'axios';

export const fetchCholesterolLevels = () => {
    return axios.get(
        `/api/cholesterols`
    )
};
export const createCholesterolLevel = (data) => {
    return axios.post(
        `/api/cholesterols`,
        data,
    )
};
export const fetchAllergies = () => (
    axios.get(
        `/api/allergies/`
    )
);
export const createAllergy = (data) => {
    return axios.post(
        `/api/allergies`,
        data,
    )
};
export const editAllergy = (data) => {
    return axios.patch(
        `/api/allergies/${data._id}`,
        data
    )
}
export const fetchBloodPressureLevels = () => (
    axios.get(
        `/api/bloodPressures`,
    )
);
export const createBloodPressureLevel = (data) => {
    return axios.post(
        `/api/bloodPressures`,
        data,
    )
};
export const fetchMedicalConditions = () => (
    axios.get(
        `/api/medicalConditions`,
    )
);
export const createMedicalCondition = (data) => (
    axios.post(
        `/api/medicalConditions`,
        data
    )
);
export const fetchRestingHeartRates = () => (
    axios.get(
        `/api/restingHeartRates`,
    )
);
export const createRestingHeartRate = (data) => {
    return axios.post(
        `/api/restingHeartRates`,
        data,
    )
};
export const fetchTemperatures = () => (
    axios.get(
        `/api/temperatures`,
    )
);
export const createTemperature = (data) => {
    return axios.post(
        `/api/temperatures`,
        data,
    )
};
export const fetchVitaminDLevels = () => (
    axios.get(
        `/api/vitaminDs`,
    )
);
export const createVitaminDLevel = (data) => {
    return axios.post(
        `/api/vitaminDs`,
        data,
    )
};
export const fetchWeights = () => {
    
    return axios.get(
        `/api/weights`,
    )
}
export const createWeight = (data) => {
    return axios.post(
        `/api/weights`,
        data,
    )
};