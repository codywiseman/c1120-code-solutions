const fs = require('fs');

let userInput = process.argv[2];

fs.writeFile('note.txt', userInput, (err) => {
  if (err) {
    console.error(err);
  }
})
