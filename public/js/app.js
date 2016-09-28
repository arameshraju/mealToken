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
                 ];
    $scope.department=[];
//        {deptName:'Admin',desc:'Admin Department'},
//        {deptName:'Accounts',desc:'Admin Department'},
//        {deptName:'Manufacting',desc:'Manufacting Department'}
//    ];
    $scope.employee=[
        {empId:'123',empName:'Srinivas',phone:9849012345,deptId:'Admin'},
        {empId:'124',empName:'Venkat',phone:9849212345,deptId:'Admin'},
        {empId:'125',empName:'Hari',phone:9849212345,deptId:'Accounts'},
        {empId:'126',empName:'Satyanarayana',phone:98481223344,deptId:'Accounts'}
    ];
    $scope.store=[
        {storeName:'General Store',desc:'General Store at Main Builder'},
        {storeName:'Kitch Store',desc:'Kitchen Store '},
        {storeName:'Kitch',desc:'Kitchen for Dail cooking'}
    ];
    $scope.stockGroup=[
        {stockGroup:'Rice items',desc:'Main course rice'},
        {stockGroup:'Dal Items',desc:'Main course rice'},
        {stockGroup:'Oil Items',desc:'Main course rice'},
        {stockGroup:'Malaslas',desc:'Main course rice'},
        {stockGroup:'Veggis',desc:'Curry'},
        {stockGroup:'Milk Products',desc:'Milk, Curd etc'}
    ];
    $scope.stockItem=[
        {stockitem:'Rice 1001',desc:'General Rice',unit:'kgs',stockGroup:'Rice items'},
        {stockitem:'Basumathi',desc:'General Rice',unit:'kgs',stockGroup:'Rice items'},
        {stockitem:'Tur Dal',desc:'General Dal',unit:'kgs',stockGroup:'Dal items'},
        {stockitem:'Sunflower oil',desc:'Oils',unit:'ltrs',stockGroup:'Oil items'},
        {stockitem:'Everest Masala',desc:'Malalas',unit:'grams',stockGroup:'Malasalas'},
        {stockitem:'Curd',desc:'fresh Curd',unit:'kgs',stockGroup:'Milk Products'}
    ];
    $scope.foodItem=[
        {fooditem:'Meal General',desc:'Regular meal normal days',rate:25,empRate:50},
        {fooditem:'Special meal',desc:'Special meal festivals days',rate:50,empRate:100}
    ];
    
    $scope.saveAction=function(){
            alert("This is Demo App, You can't save New");  

    };
    
});