const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAllergyInput(data) {
    let errors = {};

    data.allergy = validText(data.allergy) ? data.allergy : "";

    if(!Validator.isLength(data.allergy, { min: 1, max: 50 })) {
        errors.handle = 'Allergy must be at least 1 characters';
    }

    if(Validator.isEmpty(data.allergy)) {
        errors.handle = 'Allergy is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}