var config = require('./config');
var Twitter = require('twitter');
var T = new Twitter(config);

var params = {
    q: '#nodejs',
    
}