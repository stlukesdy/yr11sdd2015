var fs = require('fs');

var item = fs.readFileSync('input.txt', 'utf8').split("\n");

var index = 0;

while (index< item.length) {
    console.log(item[index]);
    index = index + 1;
}
