const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    personalFields: {
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      name: { type: String },
      about: { type: String },
      phone: { type: String },
      country: { type: String },
      city: { type: String },
      website: { type: String }
    },

    educationFields: [
      {
        institution: { type: String },
        fieldOfStudy: { type: String },
        degree: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        description: { type: String }
      }
    ],
    experienceFields: [
      {
        workTitle: { type: String },
        companyName: { type: String },
        companyLocation: { type: String },
        employmentType: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        description: { type: String }
      }
    ],
    skills: [String],
    gitHub: [
      {
        title: { type: String },
        photo: { type: String },
        video: { type: String },
        repository: { type: String },
        deployedSite: { type: String },
        description: { type: String }
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
