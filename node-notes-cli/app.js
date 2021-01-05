const fs = require('fs');

const data = require('./data.json');

const expression = process.argv[2];

switch(expression) {
  case 'read':
    for(let note in data.notes) {
      console.log(note + ':', data.notes[note])
    }
}
