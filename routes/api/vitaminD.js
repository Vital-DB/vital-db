const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const VitaminD = require('../../models/VitaminD');

// validations
const validateVitaminDInput = require('../../validations/vitaminD');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the VitaminD route" })
});
router.get('/user/:user_id', (req, res) => {
  VitaminD.find({user: req.params.user_id})
      .then(vitaminD => res.json(vitaminD))
      .catch(err =>
          res.status(404).json({ vitalsError: 'No vitaminD found from that user' }
      )
  );
});
// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateVitaminDInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newVitaminD = new VitaminD({
        user: req.body.user,
        value: req.body.value,
      });
  
      newVitaminD.save().then(vitaminD => res.json(vitaminD));
    }
  );

module.exports = router;