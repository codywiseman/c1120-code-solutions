var $leftChevron = document.querySelector('.fa-chevron-left');
var $rightChevron = document.querySelector('.fa-chevron-right');
var $images = document.querySelectorAll('li');
var $activeImage = document.querySelector('.img');
var $dots = document.querySelectorAll('.row2 i');
var $dotsContainer = document.querySelector('.row2')

var intervalID = null;

var imageCount = 0

var dotsArray = []

for(var i = 0; i < $dots.length; i++) {
  dotsArray.push($dots[i]);
}

$dotsContainer.addEventListener('click', function (e){
  for(var i = 0; i < $dots.length; i++) {
    if(e.target.id === $dots[i].id) {
      $dots[i].className = 'fas fa-circle fa-2x circle';
      $images[i].className = 'img';
    }
    else if (e.target.tagName !== 'DIV'){
      $dots[i].className = 'far fa-circle fa-2x circle';
      $images[i].className = 'img hidden';
    }
  }
  imageCount = dotsArray.indexOf(e.target);
  clearInterval(intervalID);
  intervalID = setInterval(timedImgChange, 3 * 1000);
})



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
  clearInterval(intervalID);
  intervalID = setInterval(timedImgChange, 3 * 1000);
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
  clearInterval(intervalID);
  intervalID = setInterval(timedImgChange, 3 * 1000);
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
