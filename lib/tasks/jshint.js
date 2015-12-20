'use strict';

var through = require('through2');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function(app, base, env) {
  return function() {
    return base.toStream('files')
      .pipe(through.obj(function(file, enc, cb) {
        if (/\.js$/.test(file.path)) {
          this.push(file);
        }
        cb();
      }))
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  };
};