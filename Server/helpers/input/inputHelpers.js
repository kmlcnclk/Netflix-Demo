const bcrypt = require('bcryptjs');

// Checking email and password
const validateUserInput = (email, password) => {
  return email && password;
};

// Compare password and hashPassword
const comparePassword = (password, hashPassword) => {
  if (bcrypt.compareSync(password, hashPassword) || password == hashPassword) {
    return true;
  } else {
    return false;
  }
};

module.exports = { validateUserInput, comparePassword };
