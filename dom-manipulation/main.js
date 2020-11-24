
var totalClickCount = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count')



$hotButton.addEventListener('click', function(event) {
  totalClickCount++;
  console.log(totalClickCount);
  var temperature;
  if(totalClickCount < 4) {
    temperature = 'cold';
  } else if (totalClickCount < 7) {
    temperature = 'cool';
  } else if (totalClickCount < 10) {
    temperature = 'tepid';
  } else if (totalClickCount < 13) {
    temperature = 'warm';
  } else if (totalClickCount < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $clickCount.textContent = 'Count: ' + totalClickCount;
  $hotButton.className = 'hot-button ' +  temperature;
} );
