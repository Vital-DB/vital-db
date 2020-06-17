const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Weight = require('../../models/Weight');

// validations
const validateWeightInput = require('../../validations/weight');

// // ROUTES
// GETS
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Weight.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(weight => res.json(weight))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No weight found from that user' }
      )
  );
});
// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateWeightInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newWeight = new Weight({
        user: req.body.user,
        value: req.body.value,
      });
  
      newWeight.save().then(weight => res.json(weight));
    }
  );

module.exports = router;