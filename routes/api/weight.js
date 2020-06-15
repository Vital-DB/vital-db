const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Weight = require('../../models/Weight');

// validations
const validateWeightInput = require('../../validations/weight');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the Weight route" })
});

// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateWeightInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newWeight = new Weight({
        user: req.body.user,
        value: req.body.value,
      });
  
      newWeight.save().then(weight => res.json(weight));
    }
  );

module.exports = router;