const express = require("express");
const router = express.Router();

// for token signature
const keys = require('../../config/keys');

// auth required technologies
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// models
const User = require('../../models/User');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

const passport = require('passport');

// validations

// // ROUTES
// GETS
// private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    // debugger
    res.json({
        currentUser: req.user
    });
})

// POSTS
// signup
router.post('/register', (req, res) => {
    const{errors, isValid} = validateRegisterInput(req.body);

    console.log(errors);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({handle: req.body.handle })
        .then(user => {
            if(user) {
                errors.handle = "User already exists"
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password,
                    firstName: "",
                    lastName: "",
                    birthday: undefined,
                    bloodType: undefined,
                    height: 0,
                    sex: null,
                    organDonor: false
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})


// login
router.post('/login', (req, res) => {
    const{errors, isValid} = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const handle = req.body.handle;
    // const email = req.body.email;
    const password = req.body.password;
    // debugger
    User.findOne({handle})
        .then(user => {
            if(!user) {
                errors.handle = "User not found"
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {id: user.id, handle: user.handle};

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            // {expiresIn: 3600}, // this is 1 hour
                            (err, token) => {
                                res.json({
                                    success: true, 
                                    token: "Bearer " + token
                                })
                            }
                        )
                    } else {
                        errors.password = "Incorrect password"
                        return res.status(400).json(errors);
                    }
                })
        })
})

// PATCH
// update a user
router.patch('/:handle', passport.authenticate('jwt', {session: false}), (req, res) => {
    User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday,
        bloodType: req.body.bloodType,
        height: req.body.height,
        sex: req.body.sex,
        organDonor: req.body.organDonor
    },
    { where: { handle: req.params.handle } }).then((result) => {
        res.json(result);
    }).catch((error) => {
        console.log(error);
    })
})

// router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
//     // debugger
//     res.json({
//         currentUser: req.user
//     });
// })

module.exports = router;