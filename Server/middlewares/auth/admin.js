const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');

const User = require('../../models/User');

const isManager = asyncHandler(async (adminID) => {
  const admin = await User.findById(adminID);

  if (!admin) {
    throw new ApolloError('You are not admin', 403);
  } else {
    if (admin.role != 'admin') {
      throw new ApolloError('You are not admin', 403);
    }
  }
});

module.exports = {
  isManager,
};
