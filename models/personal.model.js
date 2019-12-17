const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalSchema = new Schema(
  {
    name: { type: String },
    about: { type: String },
    picture: { type: String },
    telephone: { type: String },
    email: { type: String },
    country: { type: String },
    city: { type: String },
    website: { type: String },

    education: [
      {
        school: { type: String },
        degree: { type: String },
        fieldOfStudy: { type: String },
        grade: { type: String },
        educationDescription: { type: String },
        educationDate: { type: String },
      },
    ],
    workExperience: [
      {
        work_title: { type: String },
        company: { type: String },
        companyUrl: { type: String },
        location: { type: String },
        employmentType: {
          type: String,
          enum: [
            'Full-Time',
            'Part-Time',
            'Self-Employed',
            'Freelance',
            'Contract',
            'Internship',
            'Apprenticeship',
          ],
        },
        is_current: { type: Boolean },
        jobDescription: { type: String },
        experienceDate: { type: String },
      },
    ],
    skills: { type: String },
    certificate: [
      {
        certificateName: { type: String },
        date: { type: Date },
      },
    ],
    languages: [
      {
        language: { type: String },
        fluencyLevelOption: {
          type: String,
          enum: [
            'Native Speaker',
            'Fluent',
            'Proficient',
            'Intermediate',
            'Basic Communication Skills',
          ],
        },
      },
    ],

    gitHub: [
      {
        title: { type: String },
        photo: { type: String },
        video: { type: String },
        repository: { type: String },
        deployedSite: { type: String },
        description: { type: String },
      },
    ],
    project: [
      {
        name: { type: String },
        role: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        projectURL: { type: String },
        description: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;
