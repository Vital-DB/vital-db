const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Temperature = require('../../models/Temperature');

// validations
const validateTemperature = require('../../validations/temperature');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the Temperature route" })
});

// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateTemperature(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newTemperature = new Temperature({
        user: req.body.user,
        value: req.body.value,
      });
  
      newTemperature.save().then(Temperature => res.json(Temperature));
    }
  );

module.exports = router;