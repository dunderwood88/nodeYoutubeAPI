var request = require('request');
var querystring = require('querystring');

exports.playlistSelect = function(req, res){
    res.render('playlist', { code: 'Hi!'});
}