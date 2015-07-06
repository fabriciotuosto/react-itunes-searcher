var gulp       = require('gulp');
var react      = require('gulp-react');
var less       = require('gulp-less');
var browserify = require('gulp-browserify');
var reactify   = require('reactify');
var minifyCSS  = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var connect    = require('gulp-connect');
var open       = require('gulp-open');
var del        = require('del');

gulp.task('scripts', function () {
  return gulp.src('src/jsx/app.jsx')
    .pipe(sourcemaps.init())
    .pipe(browserify({
            insertGlobals: true,
            transform: ['reactify'],
            extensions: ['.jsx']
    }))
    .pipe(react())
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'));
});

/**
 *  Concatenate minify and transalte less to css
 */
gulp.task('styles', function () {
  return gulp.src('src/less/app.less')
    .pipe(sourcemaps.init())
    .pipe(less({sourceMap: true}))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload());
});

/**
 * Clean generated source folders
 */
gulp.task('clean', function (callback) {
  del(['./public/js', './public/css', './public/fonts'], callback);
});

/**
 * Using watch to recompile javascript and less
 */
gulp.task('watch', function () {
  return gulp.watch('src/**/*.{jsx,less}', ['styles', 'scripts']);
});

/**
 * Copy Bootstrap fonts to deploy directory
 */
gulp.task('bootstrap:fonts', function(){
  return gulp.src('./node_modules/bootstrap/fonts/*')
    .pipe(gulp.dest('public/fonts'));
});

/**
 *
 */
gulp.task('connect', function () {
  connect.server({
    root      : ['./public'],
    port      : 8000,
    livereload: false
  });
});

gulp.task('open', function () {
  return gulp.src('./index.html')
    .pipe(open('http://localhost:8000', {
            url: 'http://localhost:8000',
            app: 'chrome'
          }));
});
/*
 * Default Tasks
 */
gulp.task('default', ['clean', 'connect', 'scripts', 'styles', 'bootstrap:fonts', 'watch', 'open']);