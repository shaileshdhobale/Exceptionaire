
//Constants
var constant = function() {
	this.BAD_REQUEST = "Bad request.";
	this.INTERNAL_SERVER_ERROR = "Internal Server Error.";
	this.APPOINTMENT_ADDED_SUCCESS = "Appointment added successfully.";
	this.APPOINTMENT_ADDED_FAILURE = "Failed to add appointment.";
	this.APPOINTMENTBOOKED = "APPOINTMENTBOOKED"
	this.APPOINTMENT_SLOT_UNAVALIABLE = "Appointmet slot is unable.";
	this.APPOINTMENT_FETCH_SUCCESS = "Appointmets fetched successfully.";
	this.APPOINTMENT_FETCH_FAILURE = "Failed to fetch Appointment."
}

module.exports = new constant();