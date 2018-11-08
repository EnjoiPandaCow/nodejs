const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {

    let notes = fetchNotes();
    const note = {
      title,
      body
    };

    /* Same as below using ES6 arrow functions.
    let duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    */

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
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


