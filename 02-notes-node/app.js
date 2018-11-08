console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

const command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
} else if (command === 'add') {
    console.log('Listing all notes.')
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.remove(argv.title);
} else {
    console.log('Command not recognised');
}


