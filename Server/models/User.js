const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Please enter a email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please enter a email address'],
    minlength: [6, 'Password must be a minimum of 6 characters'],
    select: false,
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
  creditCards: [
    {
      // bunu array yap
      fName: { type: String, default: '' },
      lName: { type: String, default: '' },
      cardNumber: { type: String, default: '' },
      cardExpiry: { type: String, default: '' },
      cardCVV: { type: String, default: '' },
    },
  ],

  registrationPhaseState: {
    type: Boolean,
    default: false,
  },
  profiles: [
    {
      type: mongoose.Schema.ObjectId,
      ref: ['Profile'],
    },
  ],
  child: {
    type: mongoose.Schema.ObjectId,
    ref: 'Child',
  },
  doNotEmailMe: {
    type: Boolean,
    default: false,
  },
});

// Get Reset Password Token From User
UserSchema.methods.getResetPasswordTokenFromUser = function () {
  const randomHexString = crypto.randomBytes(15).toString('hex');

  const resetPasswordToken = crypto
    .createHash('SHA256')
    .update(randomHexString)
    .digest('hex');

  const expire = parseInt(process.env.RESET_PASSWORD_EXPIRE);

  this.resetPasswordToken = resetPasswordToken;
  this.resetPasswordExpire = Date.now() + expire;

  return resetPasswordToken;
};

// Password Hashing
UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
