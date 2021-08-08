const asyncHandler = require('express-async-handler');
const Category = require('../models/Category');

// Add Category
const addCategory = asyncHandler(async (name, imageUrl, res) => {
  const category = await Category.create({
    name,
    imageUrl,
  });
  res.results = {
    success: true,
    data: category,
  };
});

module.exports = {
  addCategory,
};
