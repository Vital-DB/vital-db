const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const RestingHeartRate = require('../../models/RestingHeartRate');

// validations
const validateRestingHeartRateInput = require('../../validations/restingHeartRate');

// // ROUTES
// GETS
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  RestingHeartRate.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(restingHeartRate => res.json(restingHeartRate))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No restingHeartRate found from that user' }
      )
  );
});

// POSTS
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateRestingHeartRateInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newRestingHeartRate = new RestingHeartRate({
        user: req.user.id,
        value: req.body.value,
      });
  
      newRestingHeartRate.save()
        .then(restingHeartRate => res.json(restingHeartRate))
        .catch(err => res.status(422).json(err));
    }
  );

module.exports = router;