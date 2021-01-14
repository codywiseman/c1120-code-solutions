const express = require('express');
const pg = require('pg');

const app = express();

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

// Return all rows from the grades table

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
  `;
  db.query(sql)
    .then( result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error:'An unexpected error occured.'});
    })
})

// Insert a new grade into the grades table

app.post('/api/grades', (req, res) => {
  const gradeData = req.body;
  const name = gradeData['name'];
  const course = gradeData['course'];
  const score = gradeData['score'];
  if (!gradeData['name'] || !gradeData['course'] || !gradeData['score']) {
    res.status(400).json({error: 'Name, Course, and Grade are required fields'})
  } else if (isNaN(gradeData['score']) || gradeData['score'] < 1 || gradeData['score'] > 100) {
    res.status(400).json({ error: 'Score must be a number between 1 and 100' })
  }
  const sql =  `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
  `;
  const params = [name, course, score];
db.query(sql, params)
  .then(result => {
    const newGrade = result.rows[0]
    res.status(201).json(newGrade);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured.' });
  })
})

// Update a grade in the grades table

app.put('/api/grades/:gradeId', (req, res) => {

})

//Listening on port

app.listen(8081, () => {
  console.log('Listening on port 8081!')
})
