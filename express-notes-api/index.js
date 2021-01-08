const express = require('express');
const data = require('./data.json');

const app = express();

app.use(express.json());

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

app.post('/api/notes', (req, res) => {
  if(!req.body['content']) {
    res.status(400).json({error:'content is a required field'})
  } else if (req.body['content']) {
    const newNote = req.body;
    newNote['id'] = data.nextId;
    data.notes[data.nextId] = newNote;
    data.nextId++
    res.status(201).json(newNote);
  } else {
    res.status(500).json({error: 'an unexpected error occured'})
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
