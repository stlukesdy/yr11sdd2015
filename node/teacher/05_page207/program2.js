var fs = require('fs');

var item = [1,4,6,8];

var fileContent = '';

var index = 0;

while (index< item.length) {
    fileContent= fileContent +  item[index] + '\n';
    index = index + 1;
}
console.log(fileContent);


fs.writeFileSync('output.txt', fileContent);

