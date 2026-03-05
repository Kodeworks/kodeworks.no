const path = require('path');

module.exports = {
  i18n: {
    locales: ['no', 'en'],
    localeDetection: false,
    defaultLocale: 'no',
  },
  turbopack: {
    // Allow resolving hoisted workspace dependencies from the monorepo root.
    root: path.join(__dirname, '..'),
  },
  reactStrictMode: true,
};
