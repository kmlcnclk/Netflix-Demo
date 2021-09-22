const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const ChildSchema = new Schema({
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
  childName: { type: String, default: 'Child' },
  childImageUrl: {
    type: String,
    default:
      'https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT5ixFQbYisnc8BoIn1xc_zMKDXVUUZsRdfNhsya9b89L6TukHzcbTefYwHzK-81f0E1jrC-R9AK9KRRBwGCLxs6FtBY.png?r=8f0',
  },
  language: { type: String, default: 'English' },
  maturitySettings: {
    ageLimit: {
      type: String,
      default: '7+',
      enum: ['7+', 'All'],
    },
    sliderValue: {
      type: Number,
      default: 25,
      enum: [25, 0],
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
    dataUsagePerScreen: {
      type: String,
      default: 'Auto',
      enum: ['Auto', 'Low', 'Medium', 'High'],
    },
  },
  watchHistory: [{ type: mongoose.Schema.ObjectId, ref: ['Movie', 'Seri'] }],
  createAt: {
    type: Date,
    default: Date.now,
  },
  kids: {
    type: Boolean,
    default: true,
  },
  titleRestrictions: [
    {
      type: String,
    },
  ],
  profileLock: {
    type: String,
    enum: ['On', 'Off'],
    default: 'Off',
  },
  password: {
    type: String,
    maxlength: 4,
  },
});

module.exports = mongoose.models.Child || mongoose.model('Child', ChildSchema);
