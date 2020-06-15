const Validator = require('validator');
const validText =  require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.weight = validText(data.weight) ? data.weight : "";

    if(!Validator.isLength(data.weight, { min: 2, max: 3 })) {
        errors.handle = 'Weight must be at least 2 digits';
    }

    if(Validator.isEmpty(data.weight)) {
        errors.weight = 'Weight is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}