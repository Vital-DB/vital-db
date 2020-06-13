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
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the users route" })
});
// private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        handle: req.user.handle,
        email: req.user.email
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

    const handle = req.body.handle;
    // const email = req.body.email;
    // const password = req.body.password;

    User.findOne({handle})
        .then(user => {
            if(user) {
                errors.handle = "User already exists"
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const payload = { id: user.id, handle: user.handle };
                                jwt.sign(
                                    payload, 
                                    keys.secretOrKey, 
                                    {expiresIn: 3600}, 
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: "Bearer " + token
                                        })
                                    }
                                )
                            })
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
                            {expiresIn: 3600}, // this is 1 hour
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


module.exports = router;