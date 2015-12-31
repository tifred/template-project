var gulp = require('gulp'),
   uglify = require('gulp-uglify');
   htmlmin = require('gulp-htmlmin');
   rename = require('gulp-rename');
   minifyCss = require('gulp-minify-css');
   minifyHTML = require('gulp-minify-html');
   jshint = require('gulp-jshint');
   concat = require('gulp-concat');
   imageOptim = require('gulp-imageoptim');

gulp.task('buildDist', function() {
  gulp.src(["./src/**", "!./src/**/*.js", "!./src/**/*.html", "!./src/**/*.css", "!./src/images_src/**/*", "!./src/images/**/*"])
    .pipe(gulp.dest("./dist"));
});

gulp.task('images', function() {
  return gulp.src('./src/images/**/*')
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('minify-html', function() {
  return gulp.src('./src/**/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'));
});

gulp.task('minifyJS', function () {
   gulp.src('./src/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
});

gulp.task('minifyCSS', function() {
  return gulp.src('./src/**/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}, {skip_import: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function() {
  return gulp.src(['./src/**/*.js', '!./src/js/lib/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
  

gulp.task('build', ['lint', 'buildDist', 'images', 'minify-html', 'minifyJS', 'minifyCSS']);
