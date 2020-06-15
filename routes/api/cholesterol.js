const express = require("express");
const router = express.Router();
const passport = require('passport');

// models
const Cholesterol = require('../../models/Cholesterol');

// validations
const validateCholesterolInput = require('../../validations/cholesterol');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    res.json({ msg: "This is the Cholesterol route" })
});

// POSTS
// signup
router.post('/',
    // passport.authenticate('jwt', { session: false }), this isnt working
    (req, res) => {
      const { errors, isValid } = validateCholesterolInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newCholesterol = new Cholesterol({
        user: req.body.user,
        value: req.body.value,
      });
  
      newCholesterol.save().then(cholesterol => res.json(cholesterol));
    }
  );

module.exports = router;