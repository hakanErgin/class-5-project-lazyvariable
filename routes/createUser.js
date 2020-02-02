const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

// New register
router.post("/", (req, res) => {
  const personalFields = req.body.personalFields;

  // Check for existing user
  User.findOne({ email: personalFields.email }).then(user => {
    console.log(user);

    const newUser = new User({ personalFields });

    // create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.personalFields.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.personalFields.password = hash;
        newUser
          .save()
          .then(user => {
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
          .catch(err => {
            res.status(500).send({
              status: 500,
              message: "Username in use",
              type: "internal"
            });
          });
      });
    });
  });
});

// Entering the data for the first time and updating
router.route("/:id").post((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then(info => {
      info.personalFields = req.body.personalFields;
      info.educationFields = req.body.educationFields;
      info.experienceFields = req.body.experienceFields;
      info.skills = req.body.skills;
      info
        .save()
        .then(() => res.json("Added successfully!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Entering Github data
router.route("/github/:id").post((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then(info => {
      info.gitHub = req.body.gitHub;
      info
        .save()
        .then(() => res.json("Added successfully!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Getting specified data by ID
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
