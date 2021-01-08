const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.json());

// Client can get a list on notes

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (let id in data.notes) {
    dataArray.push(data.notes[id])
  }
  res.status(200).json(dataArray);
})

// Client can get a single note by ID

app.get('/api/notes/:id', (req, res) => {
  const getId = parseInt(req.params.id);
  if (isNaN(getId) || getId < 0) {
    res.status(400).json({error: 'id must be a positive integer'});
  } else if (data.notes[getId]){
    res.status(200).json(data.notes[getId]);
  } else {
    res.status(404).json({error: `cannot find note with id ${getId}`});
  }
})

// Client can post a new note

app.post('/api/notes', (req, res) => {
  if (!req.body['content']) {
    res.status(400).json({ error: 'content is a required field' })
  } else {
    const newNote = req.body;
    newNote['id'] = data.nextId;
    data.notes[data.nextId] = newNote;
    data.nextId++
    fs.writeFile('data.json', JSON.stringify(data, null, 2),(err) => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' })
      } else {
        res.status(201).json(newNote);
      }
    })
  }
})

// Client can delete a note

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = parseInt(req.params.id);
  if (isNaN(deleteId) || deleteId < 0) {
    res.status(400).json({ error: 'id must be a positive integer'})
  } else if (!data.notes[deleteId]) {
    res.status(404).json({ error: `cannot find note with id ${deleteId}`})
  } else {
    delete data.notes[deleteId];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err)=> {
      if(err) {
        res.status(500).json({ error: 'an unexpected error occured' })
      } else {
        res.status(204).json();
      }
    })
  }
})

//User can replace a note (PUT) by id

app.put('/api/notes/:id', (req, res) => {
  const replaceId = parseInt(req.params.id);
  const replaceNote = req.body;
  if (isNaN(replaceId) || replaceId < 0) {
    res.status(400).json({ error: 'id must be a positive integer'})
  } else if(!replaceNote['content']) {
    res.status(400).json({ error: 'content is a required field'})
  } else if (!data.notes[replaceId]){
    res.status(404).json({ error: `cannot find note with id ${replaceId}`})
  } else {
    replaceNote['id'] = replaceId;
    data.notes[replaceId] = replaceNote;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if(err) {
        res.status(500).json({ error: 'an unexpected error occured' })
      } else {
        res.status(200).json(replaceNote);
      }
    })
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000!');
})
