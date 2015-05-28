$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function () {

  var productArray = [];

  productArray[0] = {};
  productArray[0].id = 1;
  productArray[0].name = 'Oven cleaner kit';

  productArray[1] = {};
  productArray[1].id = 2;
  productArray[1].name = 'Dishwasher tablets';



  for (var i = 0; i < 2; i = i + 1) {
    console.log("id = " + productArray[i].id + " name = " + productArray[i].name);
  }

};
