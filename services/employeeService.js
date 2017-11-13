//External dependencies
var log4js = require('log4js');
var _ = require('lodash');

//Internal dependencies
var config = require("../config/config.js");
var envConfig = config.environmentConfig();
var con = require('../dao/db.js').con;

// logger
var logger = log4js.getLogger('[appointmentServices]');
logger.setLevel(envConfig.logLevel);

//Function to add appointment in DB
var addEmployee = function  (employeeObj, callback) {
	var METHOD_NAME = "[addEmployee] ";
    var sql = "INSERT INTO employee SET ?";
    con.query(sql, employeeObj, function (error, result) {
        if (error) {
        	logger.error(METHOD_NAME + error);
        	callback(error, null);
		} else {
			callback(null, result);
		}
    });
};

var getEmployee = function(queryObj, callback) {
    var METHOD_NAME = "[getEmployee] ";
    var sql = "SELECT * FROM employee ORDER BY id DESC LIMIT " + queryObj.skipRecord + ", " + queryObj.limit;
    con.query(sql, function(error, result) {
        if (error) {
            logger.error(METHOD_NAME + error);
            callback(error, null);
        } else {
            callback(null, result);
        }
    })
};

module.exports.addEmployee = addEmployee;
module.exports.getEmployee = getEmployee;