var request = require('request');
var cowsay = require('cowsay');


request({
    url: "http://helloacm.com/api/fortune",
    method: "GET"
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        if (!error) {
          console.log(cowsay.say({
          text : body,
          e : "oO",
          T : "U "
          }));
        } else {
            console.log('error getting fortune and printing cowsay');
        }
      }
});
