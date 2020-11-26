
var $spanElements = document.querySelectorAll('span')

var $accuracyCounter = document.querySelector('p')

var missedLetter = 30

var typeAccuracy = ((missedLetter / 30 )* 100)

var i = 0

document.addEventListener('keydown', function(event) {
  if (event.key === ($spanElements.item(i).textContent) && ($spanElements.item(i).className === 'underline' || $spanElements.item(i).className === 'red')) {
    $spanElements.item(i).className = 'green';
    $spanElements.item(i + 1).className = 'underline';
    i++;
    return;
  } else if (event.key !== $spanElements.item(i).textContent && $spanElements.item(i).className === 'underline') {
    $spanElements.item(i).className = 'red';
    missedLetter--;
    $accuracyCounter.appendChild(typeAccuracy)
    return;
  }
})
