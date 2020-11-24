var $openModalButton = document.querySelector('.open-modal-button')

var $noSurveyButton = document.querySelector('.no-button')

var $surveyBox = document.querySelector('.modal-survey')

$openModalButton.addEventListener('click', function(event) {
  if($surveyBox.className = 'modal-survey.hide-survey') {
    $surveyBox.className = 'modal-survey';
  }
})

$noSurveyButton.addEventListener('click', function(event){
  if ($surveyBox.className = 'modal-survey') {
    $surveyBox.className = 'modal-survey hide-survey';
  }
})
