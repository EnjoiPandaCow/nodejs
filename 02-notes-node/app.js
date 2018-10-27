console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('CJ'));

var filteredArray = _.uniq(['CJ', 1, 'CJ', 1, 2, 3, 4]);
console.log(filteredArray);

console.log('Result:', notes.add(3, 8));

// let user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
