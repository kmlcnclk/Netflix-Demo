const asyncHandler = require('express-async-handler');
const Category = require('../../models/Category');
const Product = require('../../models/Product');
const { ApolloError } = require('apollo-server-micro');

// Check category exist
const checkCategoryExist = asyncHandler(async (slug, req, res) => {
  const category = await Category.findOne({ slug });

  if (!category) {
    throw new ApolloError('There is no such category with that id', 400);
  }

  req.data = category;
});

// Check category exist to product
const checkCategoryExistToProduct = asyncHandler(async (category) => {
  const categorys = await Category.findById(category);

  if (!categorys) {
    throw new ApolloError('There is no such category with that id', 400);
  }
});

// Check product exist
const checkProductExist = asyncHandler(async (name) => {
  const product = await Product.findOne({ name });

  if (product) {
    throw new ApolloError('There is a product with this product name', 400);
  }
});

// Check product exist 2
const checkProductExist2 = asyncHandler(async (name, id) => {
  const product = await Product.findOne({ name });
  const product2 = await Product.findById(id);

  if (product2.name != name) {
    if (product) {
      throw new ApolloError('There is a product with this product name', 400);
    }
  }
});

module.exports = {
  checkCategoryExist,
  checkProductExist,
  checkProductExist2,
  checkCategoryExistToProduct,
};
