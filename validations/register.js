const Validator = require('validator');
const validText =  require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : "";
    data.handle = validText(data.handle) ? data.handle : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    if(!Validator.isLength(data.handle, { min: 3, max: 30 })) {
        errors.handle = 'Handle must be at least 3 characters';
    }

    if(Validator.isEmpty(data.handle)) {
        errors.handle = 'Handle is required';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isEmail(data.email)) {
        console.log(data.email)
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Please confirm password';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}