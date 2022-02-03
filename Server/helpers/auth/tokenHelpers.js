import cookie from 'cookie';
const jwt = require('jsonwebtoken');

function generateJwtFromUser(id, name) {
  const payload = {
    id,
    name,
  };

  const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JSON_SECRET_KEY, {
    expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRE,
  });
  return token;
}

// Generate cookie to user
const sendJwtToClient = (user, res) => {
  const token = generateJwtFromUser(user._id, user.name);

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('access_token', token, {
      httpOnly: true,
      expires: new Date(
        Date.now() + parseInt(process.env.NEXT_PUBLIC_JWT_COOKIE) * 1000 * 60
      ),
      samSite: 'strict',
      path: '/',
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? false : true,
    })
  );

  res.result = {
    success: true,
    access_token: token,
  };
};

// Is token included ?
const isTokenIncluded = (access_token) => {
  return access_token && access_token.startsWith('Bearer:');
};

// Get access token from header
const getAccessTokenFromHeader = (token) => {
  const access_token = token.split(' ')[1];
  return access_token;
};

module.exports = {
  sendJwtToClient,
  isTokenIncluded,
  getAccessTokenFromHeader,
};
