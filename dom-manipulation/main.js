var storeClickCount;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count')

function clickCountHandler(event) {
  var i = 0;
  var clickCount = i++
  $clickCount.textContent = 'Click Count: ' + clickCount;


}

$hotButton.addEventListener('click', clickCountHandler);
