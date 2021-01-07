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

const gradesArr = [];
for (let id in grades) {
  gradesArr.push(grades[id]);
}

app.get('/api/grades', (req, res) => {
  res.json(gradesArr)
})

app.delete('/api/grades/:id', (req, res) => {
  for(let i = 0; i < gradesArr.length; i++) {
    if(gradesArr[i].id === req.params.id) {
      console.log('hello');
    }
  }
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
