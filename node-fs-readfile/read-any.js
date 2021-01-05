const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if(err) {
    console.error(err);
    process.exit(1);
  }
  console.log(data)
});
