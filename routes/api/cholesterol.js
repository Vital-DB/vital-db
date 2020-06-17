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
      .sort({ date: 1 })
      .then(cholesterol => res.json(cholesterol))
      .catch(err => res.status(404).json({ vitalsError: 'No cholesterol found from that user' })
  );
});

// POSTS
// signup
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCholesterolInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newCholesterol = new Cholesterol({
        user: req.user.id,
        LDL: req.body.LDL,
        HDL: req.body.HDL,
        total: req.body.total,
        triglycerides: req.body.triglycerides,
      });
  
      newCholesterol.save()
        .then(cholesterol => res.json(cholesterol))
        .catch(err => res.status(422).json(err));
    }
  );

module.exports = router;