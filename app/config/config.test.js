var config = require('./config.global');

config.env = 'test';
config.port = 8080;

//mongo database
config.mongo = {};
config.mongo.db = {};


//google API
config.client_id = {};
config.client_secret = {};
config.access_token = {};
config.refresh_token = {};
config.api_key = {};
config.playlist_id = {}

module.exports = config;