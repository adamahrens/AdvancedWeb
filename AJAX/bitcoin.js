document.getElementById('prices-button').addEventListener('click', function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var response = JSON.parse(request.responseText);
      console.log('Fetched latest Bitcoin')
      document.getElementById('last-update').textContent = response.time.updated
      document.getElementById('usd').textContent = '$ ' + response.bpi.USD.rate
      document.getElementById('gbp').textContent = '£ ' + response.bpi.GBP.rate
      document.getElementById('eur').textContent = '€ ' + response.bpi.EUR.rate
    }
  };

  request.send();

  // Do with a fetch
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(function(res){
    if (res.ok) {
      console.log('Got a 200 response');
      console.log(res);
      return res.json();
    }
  })
  .then(function(json) {
    console.log(json);
    console.log('Last updated on ' + json.time.updated)
    console.log('USD price ' + json.bpi.USD.rate);
  })
  .catch(function(error) {
    console.log('error occurred ' + error);
  });
});
