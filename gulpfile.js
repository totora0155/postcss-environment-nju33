const fs = require('fs'),
      gulp = require('gulp'),
      watch = require('gulp-watch'),
      sourcemaps = require('gulp-sourcemaps'),
      postcss = require('gulp-postcss');

const processors = [
  require('stylelint'),
  require('postcss-reporter')({clearMessages: true}),
  require('postcss-cson-cssvars'),
  require('postcss-color-function'),
  require('postcss-assets'),
  require('postcss-property-lookup'),
  require('postcss-animation'),
  require('postcss-easings'),
  require('lost'),
  require('postcss-selector-not'),
  require('postcss-preref'),
  require('postcss-namespace')({token: '__'}),
  require('doiuse')({browsers: ['last 2 versions']}),
  require('autoprefixer')({browser: ['last 2 versions']}),
  require('css-mqpacker'),
  require('cssnano')
]

gulp.task('postcss', () => {
  gulp.src('./style.css')
    .pipe(watch('./style.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/'));
});
