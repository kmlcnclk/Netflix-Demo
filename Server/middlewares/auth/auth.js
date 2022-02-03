const asyncHandler = require('express-async-handler');
const User = require('../../models/User');
// const Product = require('../../models/Product');

const {
  isTokenIncluded,
  getAccessTokenFromHeader,
} = require('../../helpers/auth/tokenHelpers');
const jwt = require('jsonwebtoken');
const { ApolloError } = require('apollo-server-errors');

// Get access to route
const getAccessToRoute = (access_token, res) => {
  if (!isTokenIncluded(access_token)) {
    throw new ApolloError('You are not authorized to access this route', 401);
  }

  const accessToken = getAccessTokenFromHeader(access_token);
  jwt.verify(
    accessToken,
    process.env.NEXT_PUBLIC_JSON_SECRET_KEY,
    (err, decoded) => {
      if (err) {
        throw new ApolloError(
          'You are not authorized to access this route',
          401
        );
      }

      res.user = {
        id: decoded.id,
        name: decoded.name,
      };
    }
  );
};

// Is the user registered ?
const isTheUserRegistered = asyncHandler(async (email) => {
  const user = await User.findOne({ email });

  if (user) {
    throw new ApolloError('You are not authorized to access this route', 401);
  }
});

// Get product owner access
const getProductOwnerAccess = asyncHandler(async (id, res) => {
  const userId = res.user.id;

  const product = await Product.findById(id);

  if (!product) {
    throw new ApolloError('There is no such product', 400);
  }

  if (product.user != userId) {
    throw new ApolloError(
      'This product is not yours, you cannot change the properties of the product.',
      403
    );
  }
});

module.exports = {
  getAccessToRoute,
  isTheUserRegistered,
  getProductOwnerAccess,
};
