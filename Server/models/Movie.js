const { ApolloError } = require('apollo-server-errors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');
const MovieCategory = require('./MovieCategory');
mongoose.Promise = global.Promise;

const MovieSchema = new Schema({
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
      ref: 'MovieCategory',
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
MovieSchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    next();
  }
  this.slug = this.makeSlug();
  next();
});
// Name Slug .For example kamilcan-celik
MovieSchema.methods.makeSlug = function () {
  return slugify(this.name, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};

// Add product to category
// MovieSchema.pre('save', async function (next) {
//   if (!this.isModified('category')) {
//     return next();
//   }

//   try {
//     for (let i = 0; i < this.categories.length; i++) {
//       const category = await MovieCategory.findById(this.categories[i]);

//       if (!category) {
//         throw new ApolloError('There is no such category', 401);
//       }

//       await category.movies.push(this._id);
//       category.movieCount = await category.movies.length;

//       await category.save();
//     }

//     return next();
//   } catch (err) {
//     throw new ApolloError('There is no such category', 401);
//   }
// });

module.exports = mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
