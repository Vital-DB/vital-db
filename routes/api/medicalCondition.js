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