var gulp = require('gulp'),
    inject = require('gulp-inject');

gulp.task('default', function(){

  var target = gulp.src(__dirname + '/source/index.html');
  var sources = gulp.src(['./source/*.js', './source/*.css']);

  console.log(target);

  target.pipe(sources)
    .pipe(gulp.dest('./public'));
});
