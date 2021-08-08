const { ApolloError } = require('apollo-server-errors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');
const TVShowCategory = require('./TVShowCategory');
mongoose.Promise = global.Promise;

const TVShowSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a product name'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'Please enter a content'],
    minlength: [20, 'Please provide a content at least 20 characters'],
  },
  videoUrl: [
    {
      type: String,
      required: [true, 'Please enter a video url'],
    },
  ],
  categories: [
    {
      type: String,
      ref: 'TVShowCategory',
      // required: true,
      //enum ekle alt category
    },
  ],
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
  },
  duration: [
    {
      type: String,
    },
  ],
  ageLimit: {
    type: String,
    default: 'ALL MATURITY RATINGS',
    enum: ['ALL MATURITY RATINGS', '16+', '13+', '7+', 'All'],
  },
});

// Name Slug .For example kamilcan-celik
TVShowSchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    next();
  }
  this.slug = this.makeSlug();
  next();
});
// Name Slug .For example kamilcan-celik
TVShowSchema.methods.makeSlug = function () {
  return slugify(this.name, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};

// Add product to category
// TVShowSchema.pre('save', async function (next) {
//   if (!this.isModified('category')) {
//     return next();
//   }

//   try {
//     for (let i = 0; i < this.categories.length; i++) {
//       const category = await TVShowCategory.findById(this.categories[i]);

//       if (!category) {
//         throw new ApolloError('There is no such category', 401);
//       }

//       await category.tvShows.push(this._id);
//       category.tvShowCount = await category.tvShows.length;

//       await category.save();
//     }

//     return next();
//   } catch (err) {
//     throw new ApolloError('There is no such category', 401);
//   }
// });

module.exports =
  mongoose.models.TVShow || mongoose.model('TVShow', TVShowSchema);
