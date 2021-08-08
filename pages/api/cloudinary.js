const cloudinary = require('cloudinary').v2;

const Clo = async (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);

  var signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
    },
    process.env.CLOUDINARY_SECRET
  );

  res.statusCode = 200;
  res.json({ signature, timestamp });
};

export default Clo;
