var gulp = require('gulp'),
  inline = require('gulp-inline-source');

gulp.task('default', function(){

  return gulp.src('./source/index.html')
    .pipe(inline())
    .pipe(gulp.dest('./public'));
});
