/* exported getFirstInitialOfPerson */

function getFirstInitialOfPerson(person) {
  var firstNameOfperson = person.firstName;
  var firstInitialOfPerson = firstNameOfperson.charAt(0);
  return firstInitialOfPerson;
}
