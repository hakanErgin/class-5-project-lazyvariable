const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const User = require("../models/user.model");
require("dotenv").config();

router.post("/", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ "personalFields.email": email })
    .then(user => {
      if (!user) {
        res.statusMessage = "Wrong username/password";
        res.status(400).end();
      }

      //validate password
      bcrypt
        .compare(password, user.personalFields.password)
        .then(isMatch => {
          if (!isMatch) {
            res.statusMessage = "Wrong username/password";
            res.status(400).end();
          }
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  personalFields: user.personalFields
                }
              });
            }
          );
        })
        .catch(err => err);
    })
    .catch(err => err);
});

// @route   GET /auth/user
// @desc    get user data & validate user constantly
// @access  Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password") // disregard the password
    .then(user => res.json(user))
    .catch(err => err);
});

module.exports = router;
