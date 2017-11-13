
//Constants
var constant = function() {
	this.BAD_REQUEST = "Bad request.";
	this.INTERNAL_SERVER_ERROR = "Internal Server Error.";
	this.EMPLOYEE_ADDED_SUCCESS = "Employee Added successfully.";
	this.EMPLOYEE_ADD_FAILURE = "Failed to add new employee.";
	this.EMPLOYEE_FETCH_SUCCESS = "Employee fetched successfully.";
    this.EMPLOYEE_FETCH_FAILURE = "Failed to fetch employee details.";
}

module.exports = new constant();