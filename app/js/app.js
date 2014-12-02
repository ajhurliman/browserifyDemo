var $ = require('jquery');
var moment = require('moment');
var cool = require('cool-ascii-faces');

$('#submit').click(function() {
  var rightNow = moment();
  alert(rightNow);
});

$('#updateFace').click(function() {
  var newFace = cool();
  $('#faceHook').text(newFace);
});
