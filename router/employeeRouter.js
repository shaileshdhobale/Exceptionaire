var express = require('express');
var router = express.Router();	

var appointmentController = require('../controllers/appointmentController.js');


router.post('/addAppointment', appointmentController.addAppointment);
router.get('/allAppointment', appointmentController.fetchAllAppointment);


module.exports = router;