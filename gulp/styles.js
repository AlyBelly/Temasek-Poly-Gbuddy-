'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var sass = require('gulp-sass');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function () {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function () {
  return buildStyles();
});



var buildStyles = function () {
  var lessOptions = {
    options: [
      'bower_components',
      path.join(conf.paths.src, '/app')
    ]
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/app/**/**/*.scss'),
    path.join('!' + conf.paths.src, '/app/sass/material-dashboard.scss')
  ], {
    read: false
  });

  var injectOptions = {
    transform: function (filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };


  return gulp.src([
      path.join(conf.paths.src, '/app/sass/material-dashboard.scss')
    ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};




// //=====
// gulp.task('styles', function () {
//   gulp.src('app/sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css/'));
// });

// gulp.task('default', function () {
//   gulp.watch('app/sass/*.scss', ['styles']);
// });
