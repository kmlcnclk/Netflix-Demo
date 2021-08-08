const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');
mongoose.Promise = global.Promise;

const MovieCategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a category name'],
  },
  movies: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Movie',
    },
  ],
  movieCount: {
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
});

// Name Slug .For example kamilcan-celik
MovieCategorySchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    next();
  }
  this.slug = this.makeSlug();
  next();
});
// Name Slug .For example kamilcan-celik
MovieCategorySchema.methods.makeSlug = function () {
  return slugify(this.name, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};

module.exports =
  mongoose.models.MovieCategory ||
  mongoose.model('MovieCategory', MovieCategorySchema);
