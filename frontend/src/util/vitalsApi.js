import axios from 'axios';

export const fetchCholesterolLevels = () => (
    axios.get(
        `/api/cholesterols`
    )
);
export const createCholesterolLevels = () => (
    axios.get(
        `/api/cholesterols`
    )
);
export const fetchAllergies = () => (
    axios.get(
        `/api/allergies`
    )
);
export const fetchBloodPressureLevels = () => (
    axios.get(
        `/api/bloodPressures`,
    )
);
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
export const fetchTemperatures = () => (
    axios.get(
        `/api/temperatures`,
    )
);
export const fetchVitaminDLevels = () => (
    axios.get(
        `/api/vitaminDs`,
    )
);
export const fetchWeights = () => {
    
    return axios.get(
        `/api/weights`,
    )
}
