// External dependencies
var log4js = require('log4js');
var mysql = require('mysql');

// Internal dependencies
var config = require("../config/config.js");
var envConfig = config.environmentConfig();

// // logger
var logger = log4js.getLogger('[dao/db]');
logger.setLevel(envConfig.logLevel);

var con = mysql.createConnection({
    host: envConfig.DBhost,
    user: envConfig.user,
    password: envConfig.password,
    database: envConfig.database
});

con.connect(function(error) {
    if (error) {
        logger.error('Error connecting: ' + error.stack);
    } else {
        logger.info("Connection to MySql Database Successful!");
    }
});

con.query('CREATE TABLE IF NOT EXISTS employee(id int primary key AUTO_INCREMENT, name varchar(100), email varchar(100), mobile char(10))', function(error, result) {
    if(error) {
        logger.error(error);
    } else {
        logger.info("Employee table created successful");
    }
});

module.exports.con = con;
