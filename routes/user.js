const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const User = require('../models/user.model');
require('dotenv').config();

// @route   POST /user
// @desc    Register new user
// @access  Public

router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: 'User already exists' });

    const newUser = new User({ email, password });

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
              },
            });
          });
        });
      });
    });
  });
});
// // @route   POST /auth
// // @desc    Auth user
// // @access  Public
// router.post('/', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ msg: 'Please enter all fields' });
//   }

//   User.findOne({ email }).then(user => {
//     if (!user) return res.status(400).json({ msg: 'User does not exist' });

//     //validate password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

//       jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
//         if (err) throw err;
//         res.json({
//           token,
//           user: {
//             id: user.id,
//             email: user.email,
//           },
//         });
//       });
//     });
//   });
// });

// @route   GET /auth/user
// @desc    get user data
// @access  Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;
