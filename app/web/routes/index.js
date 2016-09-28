var express = require('express');
var fs = require('fs');

module.exports = function(app){
    //ROUTES for our API
    // ===================================================================
    var router  = express.Router(); //get an instance of the express Router

    // middleware to use for all requests
    router.use(function(req, res, next){
        //do logging
        console.log('Web request.');
        next(); //make sure we go to the next routes and don't stop here
    });


    //render homepage (accessed at GET http://localhost:8080/)
    router.get('/', function(req, res){
        res.render('index', { title: 'Ourtube' });
    });

    //require all routes files
    var files = fs.readdirSync('./app/web/routes/');
    for (var i in files){
        if (files[i] !== 'index.js')
            require('./' + files[i].substr(0, files[i].lastIndexOf('.')))(router)
    }

    //REGISTER OUR ROUTES
    // all of our web routes will be prefixed with /
    app.use('/', router);
}