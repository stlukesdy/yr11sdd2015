$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function () {
  var myProductRecord = {};

  myProductRecord.id = 1;
  myProductRecord.name = "Oven cleaner kit";
  myProductRecord.description = "The ultimate solution for ovens, trays and racks";
  myProductRecord.quantity = 10;
  myProductRecord.price = 5.99;

  console.log("product name = " + myProductRecord.name);

};
