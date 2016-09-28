var request = require('request');
var querystring = require('querystring');
var cfg = require('../../config');

exports.login = function(req, res){

    /*Main login for the host user of the app*/

    //set up the request parameters for authorization
    res.redirect('https://accounts.google.com/o/oauth2/auth?' + 
        querystring.stringify(
            {
            'client_id': '167972939584-qjimt0ss1qkfosnrsrclvjao88maa6tu.apps.googleusercontent.com',
            'redirect_uri': 'http://localhost:8080/loginredirect',
            'scope': 'https://www.googleapis.com/auth/youtube', 
            'response_type': 'code',
            'access_type': 'offline'

            }
        ));
};


exports.loginRedirect = function(req, res){
    
    /*const options = {
        method: 'POST',
        url: 'https://accounts.google.com/o/oauth2/token',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'accounts.google.com'
        },
        body:{
            'code': req.query.code,
            'client_id': '167972939584-qjimt0ss1qkfosnrsrclvjao88maa6tu.apps.googleusercontent.com',
            'client_secret': 'JttGNiIsUp-B2mlVcB6S9pYe',
            'redirect_uri': 'http://localhost:8080/playlist',
            'grant_type': 'authorization_code'
        },
        json:true
    }*/
    var url = 'https://accounts.google.com/o/oauth2/token';
    var body = {
            'code': req.query.code,
            'client_id': cfg.client_id,
            'client_secret': cfg.client_secret,
            'redirect_uri': 'http://localhost:8080/loginredirect',
            'grant_type': 'authorization_code'
        };

    //request(options, function(errYt, resYt, bodyYt){
    request.post(url, {form: body}, function(errYt, resYt, bodyYt){

        if (!errYt) {
            
            var json = JSON.parse(bodyYt);
            
            cfg.access_token = json.access_token;
            cfg.refresh_token = json.refresh_token;

            res.redirect('/playlist');
        } else {
            console.log(errYt);
        }
    });

}