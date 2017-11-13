
var app = angular.module('employeeApp', ['ngRoute']);

app.config(['$locationProvider' ,'$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/employee.html',
        controller: 'formCtrl'
    })
    .otherwise('/', {
        templateUrl : "views/employee.html",
        controller: 'formCtrl'
    });
  }]
);