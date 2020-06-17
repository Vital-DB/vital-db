const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Temperature = require('../../models/Temperature');

// validations
const validateTemperatureInput = require('../../validations/temperature');

// // ROUTES
// GETS
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Temperature.find({ user: req.user.id })
      .sort({ date: 1 })
      .then(temperature => res.json(temperature))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No temperature found from that user' }
      )
  );
});
// POSTS
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateTemperatureInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newTemperature = new Temperature({
        user: req.user.id,
        value: req.body.value,
      });
  
      newTemperature.save()
        .then(temperature => res.json(temperature))
        .catch(err => res.status(422).json(err));
    }
  );

module.exports = router;