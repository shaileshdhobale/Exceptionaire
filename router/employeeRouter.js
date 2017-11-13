var express = require('express');
var router = express.Router();	

var employeeController = require('../controllers/employeeController.js');


router.post('/add/employee', employeeController.addEmployee);
router.get('/employee', employeeController.getEmployee);

module.exports = router;