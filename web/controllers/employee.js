

app.controller('formCtrl', function($scope, $http) {
    $scope.user = {};
    $scope.employeeArray = [];
    var skipRecord = 0;
    var limit = 5;

    $scope.addEmployee = function() {
        $http({
            method: 'POST',
            url: '/add/employee',
            data: $scope.user
        }).success(function (data) {
            $scope.employeeArray.unshift($scope.user);
            $scope.user = {};
            $scope.user.$setPristine();
            swal("Employee details added successfully", "", "success");
        }).error(function (error) {
            swal('Error', 'Failed to add employee details.', 'error');
        });
    };

    $scope.getEmployee = function() {

        $http({
            method: 'GET',
            url: '/employee?skipRecord=' + skipRecord + "&limit=" + limit
        }).success(function (data) {
            if(data.data.employeeData) {
                $scope.employeeArray = [];
                $scope.employeeArray = data.data.employeeData;
            }
        }).error(function (error) {
            swal('Error', 'Failed to add employee details.', 'error');
        });
    };
    $scope.getEmployee();

    $scope.prevPagination = function() {
        if(skipRecord >= 5) {
            skipRecord = skipRecord - limit;
            $scope.getEmployee();

        }
    };

    $scope.nextPagination = function() {
        skipRecord = skipRecord + limit;
        $scope.getEmployee();
    }
});