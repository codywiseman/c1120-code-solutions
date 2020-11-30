
var $spanElements = document.querySelectorAll('span')

var $accuracyCounter = document.querySelector('p')

var missedLetter = 0;

var i = 0;

document.addEventListener('keydown', function(event) {
  var typeAccuracy = Math.round(((30 - missedLetter) / 30) * 100);
  if (event.key === ($spanElements.item(i).textContent) && ($spanElements.item(i).className === 'underline' || $spanElements.item(i).className === 'red')) {
    $spanElements.item(i).className = 'green';
    $spanElements.item(i + 1).className = 'underline';
    i++;
    $accuracyCounter.textContent = 'Typing Accuracy: ' + typeAccuracy + '%';
    return;
  } else if (event.key !== $spanElements.item(i).textContent && $spanElements.item(i).className === 'underline') {
    $spanElements.item(i).className = 'red';
    missedLetter++
    $accuracyCounter.textContent = 'Typing Accuracy: ' + typeAccuracy + '%';
    return;
  }
})
