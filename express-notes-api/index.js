const express = require('express');
const data = require('./data.json');

const app = express();

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (let id in data.notes) {
    dataArray.push(data.notes[id])
  }
  res.status(200).json(dataArray);
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
