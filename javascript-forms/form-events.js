function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur (event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
}

var $input = document.querySelectorAll('input')

var $textAreaInput = document.querySelector('textarea')

$input[0].addEventListener('focus', handleFocus)

$input[0].addEventListener('blur', handleBlur)

$input[0].addEventListener('input', handleInput)

$input[1].addEventListener('focus', handleFocus)

$input[1].addEventListener('blur', handleBlur)

$input[1].addEventListener('input', handleInput)


$textAreaInput.addEventListener('focus', handleFocus)

$textAreaInput.addEventListener('blur', handleBlur)

$textAreaInput.addEventListener('input', handleInput)
