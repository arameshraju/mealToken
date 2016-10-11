
app.controller('loginCtrl',function($scope, $window){
    
    $scope.loginAction=function(){
      $window.location.href = '#/dashboard';  
    }
    
  
});
app.controller('defaultCtrl',function($scope){
  
});
app.controller('menuCtrl',['$scope','$routeParams',function($scope,$routeParams){
$scope.menuSel=$routeParams.typ;                         
                          
}]);

app.controller('mainCtrl',['$scope','appRest',function($scope,appRest){
    $scope.department=[];
    $scope.employee=[];
    $scope.store=[  ];
    $scope.stockGroup=[  ];
    $scope.stockItem=[ ];
    $scope.foodItem=[ ];    
    $scope.name="Ramesh";
    var promise =appRest.getDepartmentList();
        promise.then(function(response) {
            $scope.department=response;
        }, function(reason) {
            alert('Failed: ' + reason);
        });

    var promiseEmp= appRest.getEmployeeList();
        promiseEmp.then(function(response) {
            $scope.employee=response;
        }, function(reason) {
            alert('Failed: ' + reason);
        });
    
    var promiseStore= appRest.getStoreList();
        promiseStore.then(function(response) {
            $scope.store=response;
        }, function(reason) {
            alert('Failed: ' + reason);
        });
    var promiseSitem= appRest.getStockItemList();
        promiseSitem.then(function(response) {
            $scope.stockItem=response;
        }, function(reason) {
            alert('Failed: ' + reason);
        });
    var promiseSgroup= appRest.getStockGroupList();
        promiseSgroup.then(function(response) {
            $scope.stockGroup=response;
        }, function(reason) {
            alert('Failed: ' + reason);
        });    
    var promiseFood= appRest.getFooditemList();
        promiseFood.then(function(response) {
            $scope.foodItem=response;
        }, function(reason) {
            alert('Failed: ' + reason);
        });   
        var promiseToken= appRest.getTokenList();
        promiseToken.then(function(response) {
            $scope.tokens=response;
        }, function(reason) {
            alert('Failed: ' + reason);
        });   
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

    
    $scope.saveAction=function(){
            alert("This is Demo App, You can't save New");  

    };
    
}]);