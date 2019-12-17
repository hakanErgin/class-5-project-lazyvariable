const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalSchema = new Schema(
  {

    User: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    name: { type: String },
    picture: { type: String },
    phone: { type: String },
    email: { type: String },
    country: { type: String },
    city: { type: String },
    website: { type: String },

    education: [
      {
        institution: { type: String },
        fieldOfStudy: { type: String },
        degree: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
    workExperience: [
      {
        companyName: { type: String },
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
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String },
      },
    ],
    skill: { type: String },
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
