var minimist = require('minimist');

var argv = minimist(process.argv.slice(2));
// console.log(argv);

var x  = "asdf asdkfasd aksdfjasdkfasd d  --msg=\"asdfwef sdfasd\" --awefwaef=asdfasdfa";
x = x.split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);

console.log(minimist(x));