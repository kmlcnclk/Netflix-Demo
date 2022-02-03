import cookie from 'cookie';
const jwt = require('jsonwebtoken');

function generateJwtFromUser(email) {
  const payload = {
    email,
  };

  const token = jwt.sign(payload, process.env.NEXT_PUBLIC_JSON_SECRET_KEY, {
    expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRE,
  });
  return token;
}

// Generate cookie to user
const sendJwtToClient = (email, res) => {
  const token = generateJwtFromUser(email);

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

  res.results = {
    success: true,
    access_token: `Bearer: ${token}`,
  };
};

module.exports = { sendJwtToClient };
