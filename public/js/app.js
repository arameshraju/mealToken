var app=angular.module('mealApp', ['ngRoute']);
app.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/login', {
                templateUrl : 'views/login.html',
                controller  : 'loginCtrl'
            })
            .when('/menu/:typ', {
                templateUrl : 'menus.html',
                controller  : 'menuCtrl'
            })
            .when('/masters/:flname', {
                templateUrl : function(urlattr){
                return '/views/masters/' + urlattr.flname + '.html';
                },
                controller  : 'defaultCtrl'
            })
            .when('/actions/:flname', {
                templateUrl : function(urlattr){
                return '/views/actions/' + urlattr.flname + '.html';
                },
                controller  : 'defaultCtrl'
            })
            .when('/reports/:flname', {
                templateUrl : function(urlattr){
                return '/views/reports/' + urlattr.flname + '.html';
                },
                controller  : 'defaultCtrl'
            })
            .when('/dashboard', {
                templateUrl : 'views/dash.html',
                controller  : 'defaultCtrl'
            })
            .otherwise('/login');
    });
