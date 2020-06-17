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
export const fetchBloodPressureLevels = () => (
    axios.get(
        `/api/bloodPressures`,
    )
);
export const createBloodPressureLevel = (data) => {
    return axios.post(
        `/api/bloodPressureLevel`,
        data,
    )
};
export const fetchMedicalConditions = () => (
    axios.get(
        `/api/medicalConditions`,
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
        `/api/vitaminDLevels`,
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