const { SERVER_DIRECTORY } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  return {
    images: {
      domains: ['res.cloudinary.com'],
      deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    reactStrictMode: false,
  };
};
