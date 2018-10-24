console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.addNote();
console.log(res);

console.log('Result:', notes.add(3, 8));

// let user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
