/* exported getInitialsOfPerson */

function getInitialsOfPerson (person) {
  var firstNameInitial = person.firstName.charAt(0);
  var lastNameInitial = person.lastName.charAt(0);
  var fullInitials = firstNameInitial + lastNameInitial;
  return fullInitials;
}
