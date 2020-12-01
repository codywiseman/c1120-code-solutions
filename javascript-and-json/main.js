var array = [
  {
    isbn: "978-0822235927",
    title: "1984",
    author: "George Orwell"
  },
  {
    isbn: "978-0142407332",
    title: "The Outsiders",
    author: "S.E. Hinton"
  },
  {
    isbn: "978-0399501487",
    title: "Lord of the Flies",
    author: "William Golding"
  }
]

console.log('array:', array)
console.log('typeof array:', typeof array)

var arrayStringify = JSON.stringify(array)

console.log('stringify array:', arrayStringify)
console.log('typof stringify:', typeof arrayStringify)

var jsonString = '{"student-name": "Tevin Moses","id": "0481922"}'

console.log("jsonString:", jsonString)
console.log("typeof jsonString:", typeof jsonString)

var parseString = JSON.parse(jsonString)

console.log('parseString:', parseString)
console.log('typeof parseString:', typeof parseString)
