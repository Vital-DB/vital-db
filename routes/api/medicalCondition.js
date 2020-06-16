const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const MedicalCondition = require('../../models/MedicalCondition');

// validations
const validateMedicalConditionInput = require('../../validations/medicalCondition');

// // ROUTES
// GETS
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    MedicalCondition.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(medicalCondition => res.json(medicalCondition))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No medicalCondition found from that user' }
      )
  );
});

// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateMedicalConditionInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newMedicalCondition = new MedicalCondition({
        user: req.body.user,
        value: req.body.value,
      });
  
      newMedicalCondition.save().then(medicalCondition => res.json(medicalCondition));
    }
  );

module.exports = router;