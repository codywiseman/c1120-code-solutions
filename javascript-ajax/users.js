var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  var responseList = xhr.response;
  for (var i = 0; i < responseList.length; i++) {
    var user = responseList[i];
    var listItem = document.createElement('li');
    listItem.textContent = user.name;
    $userList.appendChild(listItem);
  }
})

xhr.send();
