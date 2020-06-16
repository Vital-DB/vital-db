import axios from 'axios';

export const fetchCholesterolLevels = ({userId}) => (
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
    axios.get({
        url: `/api/bloodPressureLevels/user/${userId}`,
    })
);
export const fetchMedicalConditions = (userId) => (
    axios.get({
        url: `/api/medicalConditions/user/${userId}`,
    })
);
export const fetchRestingHeartRates = (userId) => (
    axios.get({
        url: `/api/restingHeartRates/user/${userId}`,
    })
);
export const fetchTemperatures = (userId) => (
    axios.get({
        url: `/api/temperatures/user/${userId}`,
    })
);
export const fetchVitaminDLevels = (userId) => (
    axios.get({
        url: `/api/vitaminDLevels/user/${userId}`,
    })
);
export const fetchWeights = (userId) => (
    axios.get({
        url: `/api/weights/user/${userId}`,
    })
);
