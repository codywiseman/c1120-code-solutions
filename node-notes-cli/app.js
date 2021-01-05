const fs = require('fs');

const data = require('./data.json');

const expression = process.argv[2];

switch(expression) {
  case 'read':
    for(let note in data.notes) {
      console.log(`${note}: ${data.notes[note]}`)
    }
    break;
  case 'create':
    data.notes[data.nextId] = process.argv[3];
    break;
  case 'delete':
    const deleteNote = process.argv[3];
    const {[deleteNote]: remove, ...rest} = data.notes;
    data.notes = rest;
    break;
  case 'update':
    const noteUpdateNumber = process.argv[3];
    const updatedNote = process.argv[4];
    data.notes[noteUpdateNumber] = updatedNote;
    break;
  default:
    console.log(`${expression} is not a command`)
}

for (let note in data.notes) {
  data.nextId = parseFloat(note) + 1;
}

fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.error(err);
    process.exit(1)
  }
})
