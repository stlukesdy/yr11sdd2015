$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function () {
  // console.log("Hello world");
  // console.log(5 + 6);

  // var number1 = 5;
  // var number2 = 6;
  // var result = number1 + number2;
  // console.log("The result is " + result);
  
  var names = ['name1', 'name2'];
  console.log( names.length );
  
  names[0] = 'name0';
  console.log( names[0] );
  
  var i = 0;
  
  while( i < names.length){
    console.log( names[i]);
    i = i + 1;
  }
  
  
  
  
};
