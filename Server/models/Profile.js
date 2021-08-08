const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ProfileSchema = new Schema({
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: ['Movie', 'Seri'],
    },
  ],
  likeCount: {
    type: Number,
    default: 0,
  },
  myList: [
    {
      type: mongoose.Schema.ObjectId,
      ref: ['Movie', 'Seri'],
    },
  ],
  profileName: { type: String, default: '' },
  profileImageUrl: {
    type: String,
    default:
      'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41',
  },
  language: { type: String, default: 'English' },
  maturitySettings: {
    ageLimit: {
      type: String,
      default: 'ALL MATURITY RATINGS',
      enum: ['ALL MATURITY RATINGS', '16+', '13+', '7+', 'All'],
    },
    sliderValue: {
      type: Number,
      default: 100,
      enum: [100, 75, 50, 25, 0],
    },
  },
  autoplayControls: {
    autoplayNextEpisode: {
      type: Boolean,
      default: true,
    },
    previews: {
      type: Boolean,
      default: true,
    },
  },
  watchHistory: [{ type: mongoose.Schema.ObjectId, ref: ['Movie', 'Seri'] }],
  createAt: {
    type: Date,
    default: Date.now,
  },
  kids: {
    type: Boolean,
    default: false,
  },
  titleRestrictions: [
    {
      type: String,
    },
  ],
});

module.exports =
  mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
