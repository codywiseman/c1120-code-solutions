const takeAChance = require('./take-a-chance');

const promiseName = takeAChance('Cody');

promiseName.then(value => {
  console.log(value);
}).catch((err) => {
  console.log(err);
})
