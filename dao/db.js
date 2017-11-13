/*
// External dependencies
var log4js = require('log4js');
var mongoose = require('mongoose');


// // Internal dependencies
var config = require("../config/config.js");
var envConfig = config.environmentConfig();

// // logger
var logger = log4js.getLogger('[dao/db]');
logger.setLevel(envConfig.logLevel);



var connectToMongo = function() {
    // Connect to DB
    // var mongoURL = process.env.MONGO_OVERRIDE || environmentConfig.dbConnectionString;
    var mongoURL = envConfig.dbConnectionString;
    mongoose.connect(mongoURL);
    db = mongoose.connection;
    db.on('error', function onError(err) {
        logger.warn('Connection to Mongo Unsuccessful: ' + err);
    });

    // When the connection is disconnected
    db.on('disconnected', function() {
        logger.info('Mongoose default connection disconnected');
    });

    // When successfully connected
    db.on('connected', function() {
        logger.info('Mongoose default connection open');
    });

    db.once('open', function callback() {
        logger.info('Connection to Mongo Successful');
    });
};

var Schema = mongoose.Schema;


var appointment = new Schema({
    title: { type: String, require: true},
    startDate: {type: Date, require: true},
    endDate: {type: Date, require: true},
    description: {type: String, require: true}
});


// Exports modules.
module.exports.appointment = mongoose.model('appointment', appointment, 'appointment');

//Mongoose Connection
module.exports.db = mongoose.connection;
module.exports.connectToMongo = connectToMongo;*/

// External dependencies
var log4js = require('log4js');

// Internal dependencies
var config = require("../config/config.js");
var envConfig = config.environmentConfig();

// // logger
var logger = log4js.getLogger('[dao/db]');
logger.setLevel(envConfig.logLevel);
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12204580",
    password: "iYA8uF9fQU",
    database: "sql12204580"
});

con.connect(function(error) {
    if (error) {
        logger.error('Error connecting: ' + error.stack);
    } else {
        logger.info("Connection to MySql Database Successful!");
    }
});
/*
con.end(function(error) {
    if (error) {
        logger.error('Error connecting: ' + error.stack);
    } else {
        logger.info("The connection is terminated now.");
    }
});*/

con.query('CREATE TABLE IF NOT EXISTS employee(id int primary key, name varchar(255), age int, address text)', function(error, result) {
    if(error) {
        logger.error(error);
    } else {
        logger.error("Employee table created successful");
    }
});

//
// Server: sql12.freemysqlhosting.net
// Name: sql12204580
// Username: sql12204580
// Password: iYA8uF9fQU
// Port number: 3306