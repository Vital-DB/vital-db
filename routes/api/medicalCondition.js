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
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateMedicalConditionInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newMedicalCondition = new MedicalCondition({
        user: req.user.id,
        date: req.body.date,
        condition: req.body.condition,
      });
  
      newMedicalCondition.save()
        .then(medicalCondition => res.json(medicalCondition))
        .catch(err => res.status(422).json(err));
    }
  );

router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  MedicalCondition.deleteOne( { _id: req.params.id}, function(err, result) {
      if(err) {
        res.send(err);
      } else {
        res.send(result);
      }
  })
}) 

router.patch('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  MedicalCondition.findById(req.params.id, function(err, condition) {
      if(!condition) {
          return res.status(400).json(err);
      } else {
          condition.date = req.body.date || condition.date;
          condition.condition = req.body.condition || condition.condition;
          condition.save()
          .then(condition => res.json(condition))
          .catch(err => console.log(err));
      }
  })
})

module.exports = router;