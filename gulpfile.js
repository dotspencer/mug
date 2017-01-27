var gulp =  require('gulp'),
  inline =  require('gulp-inline-source'),
  htmlmin = require('gulp-htmlmin'),
  change =  require('gulp-change'),
  uri = require('./data_uri.js');

gulp.task('default', function(){
  //gulp.watch('source/*.html', ['dataURL']);
});

gulp.task('hack', function(){
  return gulp.src('./source/index.html')
    .pipe(inline())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(change(uri.make))
    .pipe(gulp.dest('./public'));
});
