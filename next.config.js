// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const withAntdLess = require('next-plugin-antd-less');
const { i18n } = require('./next-i18next.config')

module.exports = withAntdLess({
  lessVarsFilePath: './styles/antd-custom.less',
  cssLoaderOptions: {
    //   https://github.com/webpack-contrib/css-loader#object
    //
    //   sourceMap: true, // default false
    //   esModule: false, // default false
    //   modules: {
    //     exportLocalsConvention: 'asIs',
    //     exportOnlyLocals: true,
    //     mode: 'pure',
    //     getLocalIdent: [Function: getCssModuleLocalIdent]
    //   }
  },
  i18n,
  // Other Config Here...
  images: {
    domains: ['wgcms-dev-api.commonservices.net', 'wgcms-stg-api.commonservices.net'],
  },

  webpack(config) {
    return config;
  },
  
});
