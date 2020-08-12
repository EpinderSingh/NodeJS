const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

//Adding a note.
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse.bold('New note added!'));
  } else {
    console.log(chalk.red.inverse.bold('Note title taken!'));
  }
};

// Removing a note
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  notes.length > notesToKeep.length
    ? console.log(chalk.green.inverse.bold('Note removed!'))
    : console.log(chalk.bgRed.bold('No note found!'));
  saveNotes(notesToKeep);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
