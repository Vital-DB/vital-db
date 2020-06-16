const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Allergy = require('../../models/Allergy');

// validations
const validateAllergyInput = require('../../validations/allergies');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the Allergy route" })
});

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    Allergy.find({ user: req.user.id })
        .sort({ date: -1 })
        .then(allergies => res.json(allergies))
        .catch(err => res.status(404.json({ noAllergiesFound: "No allergies found for that user id" })))
})


// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateAllergyInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newAllergy = new Allergy({
        user: req.body.user,
        value: req.body.value,
      });
  
      newAllergy.save().then(allergy => res.json(allergy));
    }
  );

module.exports = router;