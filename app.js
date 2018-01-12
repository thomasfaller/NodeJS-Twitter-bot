var config = require('./config');
var Twitter = require('twitter');
var T = new Twitter(config);

var params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'eng'
}

// The GET request

T.get('search/tweets', params, function(err, data, response) {
    if (!err) {


        // Here's what gets excuted if the GET request passes




    } else {
        console.log('There was an error with the GET request. Please try again later...');
    }
});