var gulp = require('gulp'),
    sftp = require('gulp-sftp');

gulp.task('upload', function(){
  gulp.src(__dirname + '/source/*.txt')
    .pipe(gulp.dest(__dirname + '/public/'));
});
