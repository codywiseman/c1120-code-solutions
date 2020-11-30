var $tabContainer = document.querySelector('.tab-container')

var $tabElements = document.querySelectorAll('.tab')

var $viewElements = document.querySelectorAll('.view')


$tabContainer.addEventListener('click', function(e){
  if(e.target.matches('.tab')) {
    for(var i = 0; i < $tabElements.length; i++) {
      if(e.target === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      }
      else {
        $tabElements[i].className = 'tab'
      }
    }
    var dataView = e.target.getAttribute('data-view');
    for(var x = 0; x < $viewElements.length; x++) {
      if($viewElements[x].getAttribute('data-view') === dataView) {
        $viewElements[x].className = 'view'
      }
      else {
        $viewElements[x].className = 'view hidden'
      }
    }
  }
})
