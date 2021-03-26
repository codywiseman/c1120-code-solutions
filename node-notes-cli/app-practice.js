const fs = require('fs');
const data = require('./data-practice.json');

const expression = process.argv[2];

switch(expression) {
  case 'read':
    for(let i in data.notes) {
      console.log(`${i}: ${data.notes[i]}`)
    }
    break;
  case 'create':
    data.notes[data.nextId] = process.argv[3];
    data.nextId++;
    break;
  case 'delete':
    const {[process.argv[3]]: remove, ...rest} = data.notes;
    data.notes = rest;
    break;
  case 'update':
    data.notes[process.argv[3]] = process.argv[4];
    break;
  default:
    console.log(`${expression} is not a valid command`)
}

fs.writeFile('data-practice.json', JSON.stringify(data, null, 2), err => {
  if(err) {
    console.log(err);
    process.exit(1);
  }
})
