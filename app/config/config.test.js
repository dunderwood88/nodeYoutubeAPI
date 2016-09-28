var config = require('./config.global');

config.env = 'test';
config.port = 8080;

//mongo database
config.mongo = {};
config.mongo.db = 'mongodb://localhost:27017/TestAPI';


//google API
config.client_id = '167972939584-qjimt0ss1qkfosnrsrclvjao88maa6tu.apps.googleusercontent.com';
config.client_secret = 'hjHieFTHTjt-V2DDWQSg3UgS';
config.access_token = {};
config.refresh_token = {};

module.exports = config;