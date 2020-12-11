var $headingOne = document.querySelector('h1');

var intervalID;

var count = 4

intervalID = setInterval(function(){
  if (count === 1) {
    $headingOne.textContent = "~Earth Beeeelooowww Us~";
    clearInterval(intervalID)
  } else {
    count -= 1;
    $headingOne.textContent = count;
  }
}, 1000)
