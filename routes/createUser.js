const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

// List all the users
// router.route('/all').get((req, res) => {
//   User.find()
//     .then(info => res.json(info))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// New register
router.post('/', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Simple validation
  if (!username || !email || !password) {
    res.statusMessage = "Missing Fields"
    res.status(400).end()
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user) {
      res.statusMessage = "User already exists"
      res.status(400).end()
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    // create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                email: user.email,
                username: user.username,
              },
            });
          });
        });
      });
    });
  });
});

// Entering the data for the first time and updating
router.route('/:id').post((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then(info => {
      info.name = req.body.name;
      info.about = req.body.about;
      info.phone = req.body.phone;
      info.email_ = req.body.email_;
      info.country = req.body.country;
      info.city = req.body.city;
      info.website = req.body.website;
      info.institution = req.body.institution;
      info.fieldOfStudy = req.body.fieldOfStudy;
      info.degree = req.body.degree;
      info.educationStartDate = req.body.educationStartDate;
      info.educationEndDate = req.body.educationEndDate;
      info.educationDescription = req.body.educationDescription;
      info.workTitle = req.body.workTitle;
      info.companyName = req.body.companyName;
      info.companyLocation = req.body.companyLocation;
      info.employmentType = req.body.employmentType;
      info.workStartDate = req.body.workStartDate;
      info.workEndDate = req.body.workEndDate;
      info.jobDescription = req.body.jobDescription;
      info.skills = req.body.skills;
      info
        .save()
        .then(() => res.json('Added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Entering Github data
router.route('/github/:id').post((req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then(info => {
      info.gitHub = req.body.gitHub;
      info
        .save()
        .then(() => res.json('Added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Getting specified data by ID
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
