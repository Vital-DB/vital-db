const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const MedicalCondition = require('../../models/MedicalCondition');

// validations
const validateMedicalConditionInput = require('../../validations/medicalCondition');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the MedicalCondition route" })
});
router.get('/user/:user_id', (req, res) => {
  MedicalCondition.find({user: req.params.user_id})
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