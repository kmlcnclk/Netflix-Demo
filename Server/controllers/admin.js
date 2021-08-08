const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const makeTheUserAdmin = asyncHandler(async (email, role, res) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApolloError('There is no such person here', 400);
  } else {
    if (user.role == 'admin') {
      throw new ApolloError('This person is already admin', 400);
    } else {
      user.role = await role;
      await user.save();
    }
  }
  res.results = {
    success: true,
    message: 'The transaction was successful',
  };
});

module.exports = { makeTheUserAdmin };
