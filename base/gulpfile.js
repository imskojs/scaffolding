var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./scss/**/*.scss', './www/states/**/*.scss'],
  js: [
    './www/js/config/**/*.js', 
    './www/js/service/**/*.js',
    './www/js/directive/**/*.js', 
    './www/state/**/*.js'
  ]
};

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function(done) {
  gulp.src([
    './scss/ionic.app.scss', 
    './scss/common.scss', 
    './www/state/**/*.scss'
  ])
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(concat('ionic.app.css'))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
        keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('js', function(done){
  gulp.src([
    './www/js/config/**/*.js', 
    './www/js/service/**/*.js',
    './www/js/directive/**/*.js', 
    './www/indexController.js',
    './www/state/**/*.js'
  ])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./www/js/'))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest('./www/js/'))
  .on('end', done);
})

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
