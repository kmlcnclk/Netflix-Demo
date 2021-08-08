// module.exports = {
//   reactStrictMode: true,
// };
const { SERVER_DIRECTORY } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      MONGO_URI:
        'mongodb+srv://nevergiveup:nevergiveup@coffee.i4len.mongodb.net/netflix?retryWrites=true&w=majority',
      // 'mongodb+srv://c:c123456c@a.psdrs.mongodb.net/sample_training?retryWrites=true&w=majority',
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'nextjs',
      NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: 'miblirnh',
      NEXT_PUBLIC_CLOUDINARY_KEY: '874461934316459',
      CLOUDINARY_SECRET: 'dm-hZ-beKgmWjf48I-OpW1it6h4',
      JSON_SECRET_KEY: 'coffeescript',
      JWT_EXPIRE: '30m',
      JWT_COOKIE: '30',
    },
    images: {
      domains: ['res.cloudinary.com'],
      deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    reactStrictMode: true,
  };
};
