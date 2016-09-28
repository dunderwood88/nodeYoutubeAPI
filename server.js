// server.js

//BASE SETUP
// ===================================================================

//set up the express instance
var express = require('express'); // call express
var app = express(); // define our app using express


//access configuration settings
var cfg = require('./app/config');

//set up the database
var mongoose = require('mongoose');
mongoose.connect(cfg.mongo.db);

//ROUTES for our API
require('./app/api/routes')(app);
require('./app/web/routes')(app);

//configure the app to use bodyParser()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// view engine setup for web app
app.set('views', './app/web/views');
app.set('view engine', 'jade');

//make the web/public directory static
app.use(express.static('./app/web/public'));


var port = cfg.port || 8080; // set our port

module.exports = app;

//START THE SERVER
// ===================================================================
app.listen(port);
console.log('App listening on port ' + port);