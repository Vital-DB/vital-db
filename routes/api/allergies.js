const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Allergy = require('../../models/Allergy');

// validations
const validateAllergyInput = require('../../validations/allergies');

// // ROUTES
// GETS
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    Allergy.find({ user: req.user.id })
        .sort({ date: -1 })
        .then(allergies => res.json(allergies) )
        .catch(err => res.status(404).json({ noAllergiesFound: "No allergies found for that user id" }))
})

// POSTS
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateAllergyInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newAllergy = new Allergy({
        user: req.user.id,
        allergy: req.body.allergy,
      });
  
      newAllergy.save()
        .then(allergy => res.json(allergy))
        .catch(err => res.status(422).json(err));
    }
  );

router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {

    Allergy.deleteOne( { _id: req.params.id}, function(err, result) {
       if(err) {
         res.send(err);
       } else {
         res.send(result);
       }
    })
})

module.exports = router;