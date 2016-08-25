var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:3004';

var service = {
  get: function(url) {
    return fetch(baseUrl + url)
    .then((response) => response.json())
        .then((responseJson) => {
          console.log("Data: ",responseJson);
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
  }
} ;

module.exports = service;
