const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('prefix', function() {
    return gulp.src('./style.css')
        .pipe(prefixer())
        .pipe(gulp.dest('build/'));
})

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./'));
  });

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', gulp.series('sass'));
    gulp.watch('style.css', gulp.series('prefix'));
})