
var $spanElements = document.querySelectorAll('span')

document.addEventListener('keydown', function(event) => {
  if (event. ==='71') {
    $spanElements.item(0).className = '.green';
    $spanElements.item(1).className = '.underline';

  }
})
