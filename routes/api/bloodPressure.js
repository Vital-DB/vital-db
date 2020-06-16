const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const BloodPressure = require('../../models/BloodPressure');

// validations
const validateBloodPressureInput = require('../../validations/bloodPressure');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the BloodPressure route" })
});
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  BloodPressure.find({user: req.user.id})
      .sort({ date: -1 })
      .then(bloodPressure => res.json(bloodPressure))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No bloodPressure found from that user' }
      )
  );
});

// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateBloodPressureInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newBloodPressure = new BloodPressure({
        user: req.body.user,
        value: req.body.value,
      });
  
      newBloodPressure.save().then(bloodPressure => res.json(bloodPressure));
    }
  );

module.exports = router;