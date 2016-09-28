var config = module.exports = {};

config.env = 'development';
config.port = 8080;

//mongo database
config.mongo = {};
config.mongo.db = 'mongodb://localhost:27017/TestAPI';