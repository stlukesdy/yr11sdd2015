
var SumArryContents = function () {
 var item = [5,0,7,10,20];
 var index = 0;
 var total = 0;
 
 while ( index < item.length){
  total = total + item[index];
  index = index + 1;
  
 }
 console.log("Sum = " + total);

};


SumArryContents();

