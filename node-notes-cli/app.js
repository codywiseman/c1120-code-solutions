const fs = require('fs');

const data = require('./data.json');

const expression = process.argv[2];

switch(expression) {
  case 'read':
    for(let note in data.notes) {
      console.log(note + ':', data.notes[note])
    }
    break;
  case 'create':
    let nextNote = 1;
    for (let note in data.notes) {
     nextNote = parseFloat(note) + 1;
    }
    data.notes[nextNote] = process.argv[3];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(err);
        process.exit(1)
      }
    })
  case 'delete':
    const deleteNote = process.argv[3];
    const {[deleteNote]: remove, ...rest} = data.notes;
    data.notes = rest;
    fs.writeFile('data.json', JSON.stringify(data , null, 2), (err) => {
      if (err) {
        console.error(err);
        process.exit(1)
      }
    })
  case 'update':
    const noteUpdateNumber = process.argv[3];
    const updatedNote = process.argv[4];
    data.notes[noteUpdateNumber] = updatedNote;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(err);
        process.exit(1)
      }
    })
}
