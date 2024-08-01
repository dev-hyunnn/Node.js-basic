var fs = require('fs');

// Sync
console.log('A');
var result = fs.readFileSync('nodejs/sample2.txt', 'utf8');
console.log(result);
console.log('C');

// Async
console.log('A');
fs.readFile('nodejs/sample2.txt', 'utf8', function(error, result) {
    console.log(result);
});
console.log('C');