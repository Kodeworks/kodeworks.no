const withImages = require('next-images');

module.exports = withImages({
  i18n: {
    locales: ['no', 'en'],
    localeDetection: false,
    defaultLocale: 'no',
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    return config;
  },
});