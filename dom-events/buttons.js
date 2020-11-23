function handleClick(event) {
  console.log('button clicked');
  console.dir(event);
  console.log('event target:', $clickButton);
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick, false);


function handleMouseOver(event) {
  console.log('button hovered');
  console.dir(event);
  console.log('event target:', $mouseOver);
}

var $mouseOver = document.querySelector('.hover-button');

$mouseOver.addEventListener('mouseover', handleMouseOver, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.dir(event);
  console.log('event target:', $doubleClickButton);
}

var $doubleClickButton = document.querySelector('.double-click-button');

$doubleClickButton.addEventListener('dblclick', handleDoubleClick, false);
