const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    title: 'string',
    picture: 'string',
    phone: 'Number',
    email: '',
    country: 'string',
    city: 'string',
    website: 'string',

    education: [
      {
        institution: { type: String, required: true },
        fieldOfStudy: 'string',
        // degree: { type: String, required: true },
        // startDate: { type: Date, required: true },
        // endDate: { type: Date, required: true },
      },
    ],
    // workExperience: [
    //   {
    //     companyName: { type: String, required: true },
    //     companyUrl: { type: String },
    //     employmentType: {
    //       type: String,
    //       required: true,
    //       enum: [
    //         'Full-Time',
    //         'Part-Time',
    //         'Self-Employed',
    //         'Freelance',
    //         'Contract',
    //         'Internship',
    //         'Apprenticeship',
    //       ],
    //     },
    //     is_current: { type: Boolean },
    //     startDate: { type: Date, required: true },
    //     endDate: { type: Date, required: true },
    //     description: { type: String, required: true },
    //   },
    // ],
    // skill: { required: true, type: 'string' },
    // certificate: [
    //   {
    //     certificateName: { type: String, required: true },
    //     date: Date,
    //   },
    // ],
    // language: [
    //   {
    //     language: { type: String, required: true },
    //     fluencyLevelOption: {
    //       type: String,
    //       required: true,
    //       enum: [
    //         'Native Speaker',
    //         'Fluent',
    //         'Proficient',
    //         'Intermediate',
    //         'Basic Communication Skills',
    //       ],
    //     },
    //   },
    // ],

    // gitHub: [
    //   {
    //     title: { type: String, required: true },
    //     photo: { type: String },
    //     video: { type: String },
    //     repository: [String],
    //     deployedSite: [String],
    //     description: { type: String },
    //   },
    // ],
    // project: [
    //   {
    //     name: { type: String, required: true },
    //     role: { type: String },
    //     startDate: { type: Date },
    //     endDate: { type: Date },
    //     projectURL: { type: String },
    //     description: { type: String },
    //   },
    // ],
  },
  {
    timestamps: true,
  },
);

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;
