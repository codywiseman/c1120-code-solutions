const fs = require('fs');

const fileToCopy = process.argv[2];

const newFile = process.argv[3];

fs.readFile(fileToCopy, 'utf8', (err, data) => {
  if(err) {
    console.error(err);
    process.exit(1)
  }
  fs.writeFile(newFile, data, (err) => {
    if (err) {
      console.error(err);
      process.exit(1)
    }
  })
})
