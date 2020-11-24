var clickCount = 0;

var $lightBulb = document.querySelector('.light-bulb')

var $backGround = document.querySelector('.background')

$lightBulb.addEventListener('click', function(event) {
  clickCount++;
  if(clickCount % 2 !== 0){
    $lightBulb.className = 'light-bulb on';
    $backGround.className = 'background on';
  } else {
    $lightBulb.className = 'light-bulb off';
    $backGround.className = 'background off';
  }
})
