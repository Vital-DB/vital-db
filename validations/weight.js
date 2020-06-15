const Validator = require('validator');

module.exports = function validateBloodPressureInput(data) {
    let errors = {};

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}