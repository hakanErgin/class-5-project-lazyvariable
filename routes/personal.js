const router = require('express').Router();
const Personal = require('../models/personal.model');

// Listing the data
router.route('/').get((req, res) => {
  Personal.find()
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Getting specified data by ID
router.route('/:id').get((req, res) => {
  Personal.findById(req.params.id)
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Adding new data
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const picture = req.body.picture;
  const phone = Number(req.body.phone);
  const country = req.body.country;
  const email = req.body.email;
  const city = req.body.city;
  const website = req.body.website;
  const education = req.body.education;
  const workExperience = req.body.workExperience;
  const skill = req.body.skill;
  const certificate = req.body.certificate;
  const language = req.body.certificate;
  const gitHub = req.body.gitHub;
  const project = req.body.project;

  const newPersonal = new Personal({
    name,
    surname,
    picture,
    phone,
    country,
    city,
    website,
    email,
    education,
    workExperience,
    skill,
    certificate,
    language,
    gitHub,
    project,
  });

  newPersonal
    .save()
    .then(() => res.json('personal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Deleting data by ID
router.route('/:id').delete((req, res) => {
  Personal.findByIdAndDelete(req.params.id)
    .then(() => res.json('Personal deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Updating data by ID
router.route('/update/:id').post((req, res) => {
  Personal.findById(req.params.id)
    .then(info => {
      info.name = req.body.name;
      info.surname = req.body.surname;
      info.phone = Number(req.body.phone);
      info.picture = req.body.picture;
      info.country = req.body.country;
      info.city = req.body.city;
      info.website = req.body.website;
      info.email = req.body.email;
      info.education = req.body.education;
      info.workExperience = req.body.workExperience;
      info.skill = req.body.skill;
      info.certificate = req.body.certificate;
      info.language = req.body.language;
      info.gitHub = req.body.gitHub;
      info.project = req.body.project;
      info
        .save()
        .then(() => res.json('Personal updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
