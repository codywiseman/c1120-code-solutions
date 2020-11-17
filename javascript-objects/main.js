/* eslint-disable no-console, no-unused-vars, dot-notation */

var student = {
  firstname: 'Cody' ,
  lastName: 'Wiseman' ,
  age: 26,
};

var fullName = student.firstname + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = 'Trabuco Canyon' === "Irvine";
student.previousOccupation = 'Project Manager';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Tacoma',
  year: 2021
};

vehicle['color'] = 'Cement Gray';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'millie',
  type: 'dachshund',
}

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
