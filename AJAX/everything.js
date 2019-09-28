var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

// XHR handling
document.querySelector('#xhr').addEventListener('click', function() {
  console.log('XHR button clicked');

  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var response = JSON.parse(request.responseText);
      document.querySelector('#quote').textContent = response[0];
    }
  };

  request.send();
});

// Fetch handling
document.getElementById('fetch').addEventListener('click', function() {
  console.log('Fetch button clicked');
  fetch(url)
  .then(function(res){
    if (res.ok) {
      console.log('Got a 200 response with fetch');
      console.log(res);
      return res.json();
    }
  })
  .then(function(json) {
    console.log(json);
    document.querySelector('#quote').textContent = json[0];
  })
});

//jquery
$('#jquery').click(function() {
  console.log('jQuery button clicked');
  $.getJSON(url, function(res) {
    $('#quote').text(res[0])
  });
});

//axios
$('#axios').click(function() {
  console.log('axios button clicked');
  axios.get(url)
  .then(function(res) {
     console.log(res.data[0]);
    $('#quote').text(res.data[0]);
  })
  .finally(function () {
    console.log('axios request is complete');
  });
});
