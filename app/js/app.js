var $ = require('jquery');
var moment = require('moment');
var cool = require('cool-ascii-faces');
//un comment these when jquery works and we're
//able to move onto new modules

$('#submit').click(function() {
  var rightNow = moment();
  alert(rightNow);
});

$('#updateFace').click(function() {
  var newFace = cool();
  $('#faceHook').text(newFace);
})
