var querystring = require('querystring');
var request = require('request');
var cfg = require('../../config');

exports.search = function(req, res){

    /*Our API acts as a proxy: here we accept a search query string and pass it into
    a https request to the google/youtube API, which returns a json result which we can
    pass back to the request to our API*/

    //set up the request parameters
    const options = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        qs: {
            'part': 'snippet',
            //this is the search query passed to the current API
            'q': req.params.search_term,
            'type': 'video',
            'key': cfg.api_key
            },
        json: true
    }

    //make the request to the google/youtube API
    request(options, function (errYt, resYt, bodyYt) {
        if (!errYt) {
            //return the google/youtube result as our own
            res.json(bodyYt);
        } else {
            console.log(errYt);
        }
    });

};


exports.add = function(req, res){
    /*Add the selected track to the playlist*/
    const options = {
        method: 'POST',
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + cfg.access_token
        },
        body:{
            'snippet':{
                'resourceId': {
                    'kind': 'youtube#video',
                    'videoId': req.params.track_id
                },
                'playlistId': cfg.playlist_id
            
            },
            
            
            'key': cfg.api_key
        },
        json:true
    }


    request(options, function(errYt, resYt, bodyYt){

        
        if (!errYt) {
            //return the google/youtube result as our own
            res.json(bodyYt);
        } else {
            console.log(errYt);
        }
    });
}