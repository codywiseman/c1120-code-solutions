const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}

const app = express();


app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (let id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr)
})

app.delete('/api/grades/:id', (req, res) => {
  const deleteId = parseInt(req.params.id)
  if (grades[deleteId]) {
    delete grades[deleteId];
    res.sendStatus(204);
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
