var $contactForm = document.forms[0]

$contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var messageData = {};
  for(var i = 0; i < $contactForm.length; i++) {
    if($contactForm.elements[i].type !== 'submit')
    messageData[$contactForm[i].name] = $contactForm[i].value;
  }
  console.log('messageData:', messageData);
  $contactForm.reset();
})
