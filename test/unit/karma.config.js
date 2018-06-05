var webPackConfig = require('../../build/webpack.test.config')
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack']
    },
    plugins: [
      'karma-mocha',
      'karma-sinon-chai',
      'karma-phantomjs-launcher',
      'karma-webpack'
    ],
    webpack: webPackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}