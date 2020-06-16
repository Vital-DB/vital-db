import axios from 'axios';

export const fetchCholesterolLevels = (userId) => (
    axios.get(
        `/api/cholesterols/user/${userId}`
    )
);
export const createCholesterolLevels = (userId) => (
    axios.get(
        `/api/cholesterols/user/${userId}`
    )
);
export const fetchAllergies = (userId) => (
    axios.get(
        `/api/allergies/user/${userId}`,
    )
);
export const fetchBloodPressureLevels = (userId) => (
    axios.get(
        `/api/bloodPressures/user/${userId}`,
    )
);
export const fetchMedicalConditions = (userId) => (
    axios.get(
        `/api/medicalConditions/user/${userId}`,
    )
);
export const fetchRestingHeartRates = (userId) => (
    axios.get(
        `/api/restingHeartRates/user/${userId}`,
    )
);
export const fetchTemperatures = (userId) => (
    axios.get(
        `/api/temperatures/user/${userId}`,
    )
);
export const fetchVitaminDLevels = (userId) => (
    axios.get(
        `/api/vitaminDs/user/${userId}`,
    )
);
export const fetchWeights = (userId) => {
    
    return axios.get(
        `/api/weights/user/${userId}`,
    )
}
