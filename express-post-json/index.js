const express = require('express');

const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (let id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
})

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  res.status(201).send(req.body);
  req.body['id'] = nextId;
  nextId++;
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
