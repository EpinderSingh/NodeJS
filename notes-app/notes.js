const fs = require('fs');
const chalk = require('chalk');

//Adding a note.
const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

// Listing notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.underline.cyan('YOUR NOTES'));
  notes.forEach((note) => {
    console.log(chalk.green.bold(note.title));
  });
};

// Reading note
const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.bold.yellow(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.inverse('No note found'));
  }
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
