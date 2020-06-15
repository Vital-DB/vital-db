const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMedicalConditionInput(data) {
    let errors = {};

    data.value = validText(data.value) ? data.value : "";

    if(!Validator.isLength(data.value, { min: 3, max: 50 })) {
        errors.handle = 'Medical Condition must be at least 3 characters';
    }

    if(Validator.isEmpty(data.value)) {
        errors.handle = 'Medical Condition is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}