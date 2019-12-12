const router = require('express').Router();
const Personal = require('../models/personal.model');

// Listing the data
router.route('/').get((req, res) => {
  Personal.find()
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Getting specified data by ID
// router.route('/:id').get((req, res) => {
//     Personal.findById(req.params.id)
//       .then(info => res.json(info))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

// Adding new data
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const title = req.body.title;
  const picture = req.body.picture;
  const phone = Number(req.body.phone);
  const country = req.body.country;
  const email = req.body.email;
  const city = req.body.city;
  const website = req.body.website;
  const education = (educationArray, key, value) => {
    // let educationArray = [];
    let filteredArr = educationArray.filter(item => item[key] == value);
    if (filteredArr.length !== 0) {
      filteredArr.map(element => {
        let educationObject = {};
        educationObject.institution = element.institution;
        // educationObject.fieldOfStudy = element.fieldOfStudy;
        // educationObject.degree = element.degree;
        // educationObject.startDate = element.startDate;
        // educationObject.endDate = element.endDate;
        educationArray.push(educationObject);
      });
      return educationArray;
    } else {
      return educationArray;
    }
  };
  // const education = req.body;
  // const workExperience = req.body;
  // const skill = req.body;
  // const certificate = req.body;
  // const language = req.body;
  // const gitHub = req.body;
  // const project = req.body;

  const newPersonal = new Personal({
    name,
    surname,
    title,
    picture,
    phone,
    country,
    city,
    website,
    email,
    education,
    // workExperience,
    // skill,
    // certificate,
    // language,
    // gitHub,
    // project,
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
      info.title = req.body.title;
      info.phone = Number(req.body.phone);
      info.picture = req.body.picture;
      info.country = req.body.country;
      info.email = req.body.email;
      info.city = req.body.city;
      info.website = req.body.website;
      info
        .save()
        .then(() => res.json('Personal updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
