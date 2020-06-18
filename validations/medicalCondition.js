const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMedicalConditionInput(data) {
    let errors = {};

    data.medicalCondition = validText(data.medicalCondition) ? data.medicalCondition : "";

    if(!Validator.isLength(data.medicalCondition, { min: 3, max: 50 })) {
        errors.medicalCondition = 'Medical Condition must be at least 3 characters';
    }

    if(Validator.isEmpty(data.medicalCondition)) {
        errors.medicalCondition = 'Medical Condition is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}