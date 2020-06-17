const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Cholesterol = require('../../models/Cholesterol');

// validations
const validateCholesterolInput = require('../../validations/cholesterol');

// // ROUTES
// GETS
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Cholesterol.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(cholesterol => res.json(cholesterol))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No cholesterol found from that user' }
      )
  );
});

// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateCholesterolInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newCholesterol = new Cholesterol({
        user: req.body.user,
        value: req.body.value,
      });
  
      newCholesterol.save().then(cholesterol => res.json(cholesterol));
    }
  );

module.exports = router;