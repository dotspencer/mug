var gulp = require('gulp'),
  inline = require('gulp-inline-source'),
  htmlmin = require('gulp-htmlmin');

gulp.task('default', function(){

  return gulp.src('./source/index.html')
    .pipe(inline())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public'));
});
