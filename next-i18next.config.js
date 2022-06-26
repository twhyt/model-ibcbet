const path = require('path');
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'th', 'zh_hans', 'hi', 'id'],
        localeDetection: false,
    },
    localePath: path.resolve('./locales'),
  };