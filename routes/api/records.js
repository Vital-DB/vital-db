const express = require("express");
const router = express.Router();
const passport = require('passport');

// for token signature
const keys = require('../../config/keys');

// auth required technologies
const jwt = require('jsonwebtoken');

// models
const Record = require('../../models/Record');

// validations
const validateRecordInput = require('../../validations/Record');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the Records route" })
});
// private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.Record.id,
        handle: req.Record.handle,
        email: req.Record.email
    });
})


module.exports = router;