const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log(chalk.green(`Title: ${argv.title}`));
    console.log(chalk.yellow(`Body: ${argv.body}`));
  },
});

// Create Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  handler: function () {
    console.log('Removing a note!');
  },
});

//Create list notes
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all notes!');
  },
});

// Create read notes
yargs.command({
  command: 'read',
  describe: 'Read a note!',
  handler: function () {
    console.log('Reading a note!');
  },
});

yargs.parse();
