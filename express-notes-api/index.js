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

app.get('/api/notes/:id', (req, res) => {
  const getId = parseInt(req.params.id);
  if(getId < 0 || isNaN(getId)) {
    res.status(400).json({error: 'id must be a positive integer'});
  } else if (data.notes[getId]){
    res.status(200).json(data.notes[getId]);
  } else {
    res.status(404).json({error: `cannot find node with id ${getId}`});
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
