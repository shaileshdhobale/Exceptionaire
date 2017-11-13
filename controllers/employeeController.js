//External Dependencies
var log4js = require('log4js');
var _ = require('lodash');
var async = require('async');
var Joi = require('joi');
//Internal dependencies
var config = require("../config/config.js");
var envConfig = config.environmentConfig();
var employeeService = require('../services/employeeService.js');
var constants = require('../utils/constants.js');


// logger
var logger = log4js.getLogger('[dao/db]');
logger.setLevel(envConfig.logLevel);


//Function to add appointment and send response to client.
var addEmployee = function(req, res) {
	var METHOD_NAME = "[addAppointment] ";
	var response;
	var employeeObj = req.body;
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(30).required(),
        mobile: Joi.string().max(10).required(),
        email: Joi.string().email().required()
    }).with('name', 'mobile', 'email');

    const schemaResult = Joi.validate(employeeObj, schema);
	if(schemaResult.error !== null) {
		response = {
			status: 400,
			message: constants.BAD_REQUEST
		};
		return res.status(400).send(response);
	}

	employeeService.addEmployee(employeeObj, function(error, result) {
		if(error) {
			logger.error(METHOD_NAME + error);
            response = {
                status: 500,
                message: constants.INTERNAL_SERVER_ERROR
            };
            res.status(500).send(response);
		} else if(!_.isEmpty(result)) {
            response = {
                status: 500,
                message: constants.EMPLOYEE_ADDED_SUCCESS,
				data: {
                	employee: true
				}
            };
            res.status(200).send(response);
		} else {
            response = {
                status: 500,
                message: constants.EMPLOYEE_ADD_FAILURE,
                data: {
                    employee: false
                }
            };
            res.status(200).send(response);
		}
	})
};

var getEmployee = function(req, res) {
	var METHOD_NAME = "[getEmployee] ";
	var response;
	var queryObj = req.query;
    const schema = Joi.object().keys({
        limit: Joi.string().required(),
        skipRecord: Joi.string().required()
    }).with('limit', 'skipRecord');
    const schemaResult = Joi.validate(queryObj, schema);
    if(schemaResult.error !== null) {
        response = {
            status: 400,
            message: constants.BAD_REQUEST
        };
        return res.status(400).send(response);
    }
    employeeService.getEmployee(queryObj, function(error, result) {
        if(error) {
            logger.error(METHOD_NAME + error);
            response = {
                status: 500,
                message: constants.INTERNAL_SERVER_ERROR
            };
            res.status(500).send(response);
        } else if(!_.isEmpty(result)) {
            response = {
                status: 200,
                message: constants.EMPLOYEE_FETCH_SUCCESS,
                data: {
                    employee: true,
					employeeData: result
                }
            };
            res.status(200).send(response);
        } else {
            response = {
                status: 200,
                message: constants.EMPLOYEE_FETCH_FAILURE,
                data: {
                    employee: false
                }
            };
            res.status(200).send(response);
        }
	})

};

module.exports.addEmployee = addEmployee;
module.exports.getEmployee = getEmployee;
