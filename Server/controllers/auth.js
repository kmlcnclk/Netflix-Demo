const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const { sendJwtToClient } = require('../helpers/auth/tokenHelpers');
const {
  validateUserInput,
  comparePassword,
} = require('../helpers/input/inputHelpers');
const Product = require('../models/Product');
const sendEmail = require('../helpers/libraries/sendEmail');
const mongoose = require('mongoose');
const { ApolloError } = require('apollo-server-errors');
import cookie from 'cookie';

// Register
const register = asyncHandler(
  async (res, name, password, email, profile_image) => {
    const user = await User.create({
      email,
      password,
      name,
      profile_image,
    });

    sendJwtToClient(user, res);
  }
);

// Upload Image
const uploadImage = asyncHandler(async (profile_image, res) => {
  const { id } = res.user;

  const user = await User.findByIdAndUpdate(
    id,
    {
      profile_image: profile_image,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  const user2 = await User.findById(id)
    .select('+password')
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    success: true,
    message: 'Image Upload Successful',
    data: user2,
  };
});

// Cart
const userCart = asyncHandler(async (res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  if (user.cart[0]) {
    var newPrice = 0;

    for (const product2 of user.cart) {
      const product = await Product.findById(product2.product);
      if (!product) {
        await user.cart.splice(user.products.indexOf(product2.product), 1);
        user.cartCount = await (user.cartCount - product2.quantity);
      } else {
        newPrice += product.price * product2.quantity;
      }
    }

    user.cartTotalPrice = newPrice;

    await user.save();
  }

  const user2 = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    code: 200,
    success: true,
    data: user2,
  };
});

// Login
const login = asyncHandler(async (email, password, res) => {
  if (!validateUserInput(email, password)) {
    throw new ApolloError('Please check your Inputs', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new ApolloError('Please check your input', 400);
  }

  if (!comparePassword(password, user.password)) {
    throw new ApolloError('Please check your credentials', 400);
  }

  sendJwtToClient(user, res);
});

// Logout
const logout = asyncHandler(async (res) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize({
      httpOnly: true,
      expires: new Date(Date.now()),
      samSite: 'strict',
      path: '/',
      secure: process.env.NODE_ENV === 'development' ? false : true,
    })
  );

  res.result = {
    success: true,
    message: 'Logout Successful',
  };
});

// Add To Cart
const addToCart = asyncHandler(async (_id, res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  const product = await Product.findById(_id);

  // if (!user) {
  //   return next(new CustomError("The contact id is invalid", 400));
  // }
  // if (!product) {
  //   return next(new CustomError("Product is not found", 400));
  // }

  if (user.cart[0]) {
    var addProduct;
    await user.cart.forEach((cartItem) => {
      if (cartItem.product == _id) {
        addProduct = cartItem;
        cartItem.quantity += 1;
      }
    });

    if (!addProduct) {
      user.cart.push({ product: _id, quantity: 1 });
    }
  } else {
    await user.cart.push({ product: _id, quantity: 1 });
  }

  var totalQuantity = 0;
  await user.cart.forEach((e) => {
    if (e) {
      totalQuantity += e.quantity;
    }
  });

  user.cartCount = totalQuantity;
  user.cartTotalPrice += product.price;

  await user.save();

  const user2 = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    success: true,
    data: user2,
    message: 'Added to product cart!',
  };
});

// Remove From Cart
const removeFromCart = asyncHandler(async (_id, res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  const product = await Product.findById(_id);

  var cartItems = [];

  await user.cart.forEach((cartItem) => {
    cartItems.push(cartItem.product.toString());
  });
  if (!cartItems.includes(_id)) {
    throw new ApolloError(
      'You can not remove from cart operation for this product',
      400
    );
  }

  await user.cart.forEach((cartItem) => {
    if (cartItem.product == _id) {
      cartItem.quantity -= 1;
    }
    if (cartItem.quantity == 0) {
      cartItem.remove();
    }
  });

  var totalQuantity = 0;
  await user.cart.forEach((e) => {
    if (e) {
      totalQuantity += e.quantity;
    }
  });

  user.cartCount = totalQuantity;

  // const index = await user.cart.indexOf(product_id);
  // await user.cart.splice(index, 1);

  user.cartTotalPrice -= product.price;

  await user.save();

  const user2 = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    code: 200,
    success: true,
    data: user2,
    message: 'Deleted from shopping cart!',
  };
});

// Full Remove From Cart
const fullRemoveFromCart = asyncHandler(async (_id, res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  const product = await Product.findById(_id);

  var cartItems = [];

  await user.cart.forEach((cartItem) => {
    cartItems.push(cartItem.product.toString());
  });
  if (!cartItems.includes(_id)) {
    throw new ApolloError(
      'You can not remove from cart operation for this product',
      400
    );
  }

  await user.cart.forEach((cartItem) => {
    if (cartItem.product == _id) {
      user.cartTotalPrice -= product.price * cartItem.quantity;
      cartItem.quantity = 0;
    }
    if (cartItem.quantity == 0) {
      cartItem.remove();
    }
  });

  var totalQuantity = 0;
  await user.cart.forEach((e) => {
    if (e) {
      totalQuantity += e.quantity;
    }
  });

  user.cartCount = totalQuantity;

  // const index = await user.cart.indexOf(product_id);
  // await user.cart.splice(index, 1);

  await user.save();

  const user2 = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    code: 200,
    success: true,
    data: user2,
    message: 'Completely deleted from the shopping cart!',
  };
});

// Profile
const profile = asyncHandler(async (res) => {
  const { id } = res.user;

  const user = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug stockState',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.status(200).results = {
    code: res.statusCode,
    success: true,
    data: user,
  };
});

// Edit
const edit = asyncHandler(async (name, email, password, profile_image, res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  // const user3 = await User.findOne({ name });
  // if (user3) {
  //   if (user3._id != id) {
  //     throw new ApolloError('selam', 400);
  //   }
  // }

  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;
  }
  if (password) {
    user.password = password;
  }
  if (profile_image) {
    user.profile_image = profile_image;
  }

  await user.save();

  const user2 = await User.findById(id)
    .select('+password')
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    success: true,
    data: user2,
  };
});

// Forgot Password
const forgotPassword = asyncHandler(async (resetEmail, res) => {
  const user = await User.findOne({ email: resetEmail });
  if (!user) {
    throw new ApolloError('There is no user with that email', 400);
  }

  const resetPasswordToken = user.getResetPasswordTokenFromUser();
  await user.save();
  const MY_URL = process.env.MY_URL;

  const resetPasswordUrl = `${MY_URL}/resetPassword?resetPasswordToken=${resetPasswordToken}`;
  const emailTemplate = `
    <h3>Reset Your Password</h3>
    <p>This <a href='${resetPasswordUrl}' target='_blank'>link</a> will expire in 1 hour</p>
    <p>Please reset your password before this time expires.</p>
    `;
  try {
    await sendEmail({
      from: process.env.SMTP_USER,
      to: resetEmail,
      subject: 'Reset Your Password',
      html: emailTemplate,
    });

    res.results = {
      code: 200,
      success: true,
      message: 'Token Sent To Your Email',
    };
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    throw new ApolloError('Email Cloud Not Be Sent', 500);
  }
});

// Reset Password
const resetPassword = asyncHandler(
  async (password, resetPasswordToken, res) => {
    if (!resetPasswordToken) {
      throw new ApolloError('Please provide a valid token', 400);
    }

    let user = await User.findOne({
      resetPasswordToken: resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      throw new ApolloError('Invalid Token or Session Expired', 400);
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.results = {
      code: 200,
      success: true,
      message: 'Reset Password Process Successful',
    };
  }
);

const getAddress = asyncHandler(async (address, res) => {
  const { id } = res.user;

  const user = await User.findByIdAndUpdate(
    id,
    {
      address: address,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  const user2 = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    success: true,
    data: user2,
  };
});

const getCreditCard = asyncHandler(
  async (cardName, cardNumber, cardExpiry, cardCVC, res) => {
    const { id } = res.user;

    const user = await User.findById(id);

    user.creditCard.cardName = await cardName;
    user.creditCard.cardNumber = await cardNumber;
    user.creditCard.cardExpiry = await cardExpiry;
    user.creditCard.cardCVC = await cardCVC;

    await user.save();

    const user2 = await User.findById(id)
      .populate({
        path: 'products',
        select: 'name content price imageUrl slug',
      })
      .populate({
        path: 'cart.product',
        select: 'name content price imageUrl slug',
      });

    res.results = {
      success: true,
      data: user2,
    };
  }
);

const postOrders = asyncHandler(async (product, quantity, res) => {
  const { id } = res.user;

  const product2 = await Product.findById(product);

  const user = await User.findById(product2.user);

  const order = await {
    product: product,
    quantity: quantity,
    user: id,
  };

  await user.orders.push(order);

  await user.save();

  const myOrder = await {
    product: product,
    quantity: quantity,
  };

  const user3 = await User.findById(id);

  await user3.myOrders.push(myOrder);

  await user3.save();

  const user2 = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    success: true,
    data: user2,
  };
});

const getProductsSold = asyncHandler(async (res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  var orders = [];

  for (let i = 0; i < user.orders.length; i++) {
    const product = await Product.findById(user.orders[i].product);

    const user2 = await User.findById(user.orders[i].user);

    const order = {
      quantity: user.orders[i].quantity,
      product: { name: product.name, imageUrl: product.imageUrl[0] },
      user: { name: user2.name, address: user2.address },
    };

    orders.push(order);
  }

  res.results = {
    success: true,
    data: orders.reverse(),
  };
});

const postProductsSold = asyncHandler(async (index, res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  for (let i = 0; i < user.orders.length; i++) {
    if (i === index) {
      user.orders.reverse()[i].remove();
    }
  }
  await user.save();

  res.results = {
    message: 'The product has been sent',
  };
});

const getMyOrders = asyncHandler(async (res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  var myOrders = [];

  for (let i = 0; i < user.myOrders.length; i++) {
    const product = await Product.findById(user.myOrders[i].product);

    const myOrder = {
      quantity: user.myOrders[i].quantity,
      product: {
        name: product.name,
        imageUrl: product.imageUrl[0],
        price: product.price,
      },
    };
    myOrders.push(myOrder);
  }

  res.results = {
    success: true,
    data: myOrders.reverse(),
  };
});

const getMyLikesProduct = asyncHandler(async (res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  var myLikes = [];

  for (let i = 0; i < user.likes.length; i++) {
    const product = await Product.findById(user.likes[i]);

    myLikes.push(product);
  }

  res.results = {
    success: true,
    data: myLikes.reverse(),
  };
});

const getSingleUser = asyncHandler(async (res) => {
  const { id } = res.user;

  const user = await User.findById(id)
    .populate({
      path: 'products',
      select: 'name content price imageUrl slug',
    })
    .populate({
      path: 'cart.product',
      select: 'name content price imageUrl slug',
    });

  res.results = {
    success: true,
    data: user,
  };
});

const userDelete = asyncHandler(async (res) => {
  const { id } = res.user;

  const user = await User.findById(id);

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  } else {
    await user.remove();
  }

  res.results = {
    success: true,
    message: 'Your account has been successfully deleted',
  };
});

module.exports = {
  register,
  login,
  logout,
  addToCart,
  removeFromCart,
  profile,
  edit,
  forgotPassword,
  resetPassword,
  fullRemoveFromCart,
  uploadImage,
  userCart,
  getAddress,
  getCreditCard,
  postOrders,
  getProductsSold,
  postProductsSold,
  getMyOrders,
  getMyLikesProduct,
  getSingleUser,
  userDelete,
};
