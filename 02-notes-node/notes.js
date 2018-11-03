console.log('Notes File');
console.log('Test');

const addNote = (title, body) => {
    console.log('Adding note', title, body);
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Reading note', title);
};

var remove = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
};


