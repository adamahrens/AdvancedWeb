var fullName = document.querySelector('#name');
var username = document.querySelector('#username');
var city = document.querySelector('#city');
var email = document.getElementById('email');
var image = document.getElementById('user-image');

document.getElementsByClassName('actions')[0].addEventListener('click', function() {
  fetch('https://randomuser.me/api/')
  .then(function(res){
    if (res.ok) {
      console.log('Got a 200 response');
      console.log(res);
      return res.json();
    }
  })
  .then(function(json) {
    console.log(json);
    var details = json.results[0];
    fullName.textContent = details.name.first;
    username.textContent = details.login.username;
    city.textContent =  details.location.city;
    email.textContent = details.email;
    image.src = details.picture.large;
  })
  .catch(function(error) {
    console.log('error occurred ' + error);
  });
});
