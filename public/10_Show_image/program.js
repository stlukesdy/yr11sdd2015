﻿$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function() {
  var r = Math.floor((Math.random() * 2) + 1);
  var fileName = './images/' + r + '.jpg';
  console.log(fileName);
  $('#diceImg').attr("src", fileName);
};
