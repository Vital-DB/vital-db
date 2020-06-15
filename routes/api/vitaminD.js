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