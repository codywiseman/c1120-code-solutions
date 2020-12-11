var $leftChevron = document.querySelector('.fa-chevron-left');
var $rightChevron = document.querySelector('.fa-chevron-right');
var $images = document.querySelectorAll('li');
var $activeImage = document.querySelector('.img');
var $dots = document.querySelectorAll('.row2 i');

var intervalID = null;

var imageCount = 0


$rightChevron.addEventListener('click', function () {
  if (imageCount === $images.length - 1) {
    imageCount = 0;
    $images[0].className = 'img';
    $dots[0].className = 'fas fa-circle fa-2x circle'
    $images[$images.length - 1].className = 'img hidden';
    $dots[$dots.length - 1].className = 'far fa-circle fa-2x circle'
  }
  else if ($images[imageCount].className === 'img' && $dots[imageCount].className === 'fas fa-circle fa-2x circle') {
    $images[imageCount].className = 'img hidden';
    $dots[imageCount].className = 'far fa-circle fa-2x circle';
    $images[imageCount + 1].className = 'img'
    $dots[imageCount + 1].className = 'fas fa-circle fa-2x circle'
    imageCount++;
  }
})

$leftChevron.addEventListener('click', function () {
  if (imageCount === 0) {
    imageCount = $images.length -1;
    $images[0].className = 'img hidden';
    $dots[0].className = 'far fa-circle fa-2x circle'
    $images[imageCount].className = 'img';
    $dots[imageCount].className = 'fas fa-circle fa-2x circle'
  }
  else if ($images[imageCount].className === 'img' && $dots[imageCount].className === 'fas fa-circle fa-2x circle') {
    $images[imageCount].className = 'img hidden';
    $dots[imageCount].className = 'far fa-circle fa-2x circle'
    $images[imageCount - 1].className = 'img'
    $dots[imageCount - 1].className = 'fas fa-circle fa-2x circle'
    imageCount--;
  }
})



function timedImgChange() {
  if(imageCount === $images.length -1 && imageCount === $dots.length - 1) {
    imageCount = 0;
    $images[0].className = 'img';
    $dots[0].className = 'fas fa-circle fa-2x circle';
    $images[$images.length -1 ].className = 'img hidden';
    $dots[$dots.length - 1].className = 'far fa-circle fa-2x circle';
  }
  else if ($images[imageCount].className === 'img' && $dots[imageCount].className === 'fas fa-circle fa-2x circle'){
    $images[imageCount].className = 'img hidden';
    $dots[imageCount].className = 'far fa-circle fa-2x circle';
    $images[imageCount + 1].className = 'img';
    $dots[imageCount + 1].className = 'fas fa-circle fa-2x circle';
    imageCount++
  }
}

intervalID = setInterval(timedImgChange, 3 * 1000);
