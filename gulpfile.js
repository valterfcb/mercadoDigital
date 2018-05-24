var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var input = './scss/*.scss';
var output = './public/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  includePaths: [
    'node_modules/bootstrap/scss'
  ]
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  return gulp
  //Watch the input folder for change,
  //and run 'sass' task when something happens
  .watch(input, ['sass'])
  //When there is a change,
  //log a message in the console
  .on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  });
});


gulp.task('default', ['serve']);

  var sassProdOptions = {
      outputStyle: 'compressed',
      includePaths: [
        'node_modules/bootstrap/scss'
      ]
  };

  gulp.task('prod', function () {
      return gulp
        .src(input)
        .pipe(sass(sassProdOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(output));
  });
