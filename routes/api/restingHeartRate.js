const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const RestingHeartRate = require('../../models/RestingHeartRate');

// validations
const validateRestingHeartRateInput = require('../../validations/restingHeartRate');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the RestingHeartRate route" })
});

// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateRestingHeartRateInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newRestingHeartRate = new RestingHeartRate({
        user: req.body.user,
        value: req.body.value,
      });
  
      newRestingHeartRate.save().then(restingHeartRate => res.json(restingHeartRate));
    }
  );

module.exports = router;