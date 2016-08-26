var app=angular.module('mealApp', ['ngRoute']);
app.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/login', {
                templateUrl : 'views/login.html',
                controller  : 'defaultCtrl'
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
app.controller('mainCtrl',function($scope){
   $scope.name="Ramesh";
    $scope.menu= [
                    {type:'master',lable:'Department',pageUlr:'#/masters/department'},
                    {type:'master',lable:'Employee',pageUlr:'#/masters/employee'},
                    {type:'master',lable:'Store',pageUlr:'#/masters/store'},
                    {type:'master',lable:'Stock Group',pageUlr:'#/masters/stockGroup'},
                    {type:'master',lable:'Stock Itme',pageUlr:'#/masters/stockItme'},
                    {type:'master',lable:'Food Itmes',pageUlr:'#/masters/foodItem'},
                    {type:'action',lable:'Token Issue',pageUlr:'#/actions/tokenIssue'},
                    {type:'action',lable:'Purchase',pageUlr:'#/actions/purchase'},
                    {type:'action',lable:'Purchase return',pageUlr:'#/actions/purchaseReturn'},
                    {type:'actions',lable:'Stock Issue',pageUlr:'#/actions/stockIssue'},
                    {type:'reports',lable:'Daily Report ',pageUlr:'#/reports/dailyReport'},
                    {type:'reports',lable:'Monthly Report',pageUlr:'#/reports/monthlyReport'},
                    {type:'reports',lable:'Employee Report',pageUlr:'#/reports/employeeReport'},
                    {type:'reports',lable:'Cost Report',pageUlr:'#/reports/costReport'}
                 ]
    
});