const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const VitaminD = require('../../models/VitaminD');

// validations
const validateVitaminDInput = require('../../validations/vitaminD');

// // ROUTES
// GETS
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  VitaminD.find({ user: req.user.id })
      .sort({ date: 1 })
      .then(vitaminD => res.json(vitaminD))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No vitaminD found from that user' }
      )
  );
});
// POSTS
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateVitaminDInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newVitaminD = new VitaminD({
        user: req.user.id,
        level: req.body.level,
      });
  
      newVitaminD.save()
        .then(vitaminD => res.json(vitaminD))
        .catch(err => res.status(422).json(err));
    }
  );


module.exports = router;