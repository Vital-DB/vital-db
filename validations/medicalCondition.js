const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMedicalConditionInput(data) {
    let errors = {};

    data.condition = validText(data.condition) ? data.condition : "";

    if(!Validator.isLength(data.condition, { min: 3, max: 1000 })) {
        errors.condition = 'Medical Condition must be between 3 and 1000 characters';
    }

    if(Validator.isEmpty(data.condition)) {
        errors.condition = 'Medical Condition is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}