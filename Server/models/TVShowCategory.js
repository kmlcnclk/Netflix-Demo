const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');
mongoose.Promise = global.Promise;

const TVShowCategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a category name'],
  },
  tvShows: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'TVShow',
    },
  ],
  tvShowCount: {
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
TVShowCategorySchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    next();
  }
  this.slug = this.makeSlug();
  next();
});
// Name Slug .For example kamilcan-celik
TVShowCategorySchema.methods.makeSlug = function () {
  return slugify(this.name, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};

module.exports =
  mongoose.models.TVShowCategory ||
  mongoose.model('TVShowCategory', TVShowCategorySchema);
