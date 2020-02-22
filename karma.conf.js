// Karma configuration
// Generated on Sat Feb 22 2020 10:06:17 GMT+0800 (Malaysia Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.ts': 'karma-typescript'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
