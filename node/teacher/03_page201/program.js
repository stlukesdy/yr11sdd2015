var readlineSync = require('readline-sync');
var util = require('util');

var mainProgram = function () {

  var first = readlineSync.question('First?');
  first = parseInt(first);
  //console.log('typeof first = ' + typeof first);

  var second = readlineSync.question('Second?');
  second = parseInt(second);


  var big = {};


  //console.log("typeof big = " + typeof big);
  //console.log("big = " + util.inspect(big));


  biggest(first, second, big);

  //console.log("typeof big = " + typeof big);
  //console.log("big = " + util.inspect(big));


  console.log(big.v);

};

var biggest = function (item1, item2, big) {
  if (item1 > item2) {
    big.v = item1;
  } else {
    big.v = item2;
  }
};

mainProgram();

