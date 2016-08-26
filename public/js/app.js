var app=angular.module('mealApp', ['ngRoute']);
app.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/login', {
                templateUrl : 'views/login.html',
                controller  : 'defaultCtrl'
            })
            .when('/masters', {
                templateUrl : 'views/dept.html',
                controller  : 'defaultCtrl'
            })
            .when('/actions', {
                templateUrl : 'views/dept.html',
                controller  : 'defaultCtrl'
            })
            .when('/reports', {
                templateUrl : 'views/dept.html',
                controller  : 'defaultCtrl'
            })
            .when('/dashboard', {
                templateUrl : 'views/dash.html',
                controller  : 'defaultCtrl'
            })
            .otherwise('/login');
    });
app.controller('mainCtrl',function($scope){
   $scope.name="Ramesh";
});