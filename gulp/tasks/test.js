'use strict';

var mocha = require('gulp-mocha');
var config = require('../config');

module.exports = function (gulp) {
  gulp.task('test', function () {
    return gulp.src(config.paths.test)
      .pipe(mocha({reporter: 'spec'}));
  });
};
