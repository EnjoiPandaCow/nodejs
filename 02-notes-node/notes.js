const fs = require('fs');

const addNote = (title, body) => {

    let notes = [];
    const note = {
      title,
      body
    };

    try {
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    /* Same as below using ES6 arrow functions.
    let duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    */

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Reading note', title);
};

const remove = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
};


