/* moment */

var moment = require('moment'); //require
moment().format();

console.log("Greetings from JS!");

console.log(moment().startOf('day').fromNow());

var math = require('mathjs');
console.log(math.sqrt(-4).toString());