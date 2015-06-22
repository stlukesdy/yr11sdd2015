var fs = require('fs');

var contentArray = fs.readFileSync('input.txt', 'utf8').split("\n");

for(var i in contentArray) {
    var line = contentArray[i];
    console.log(line);
}

