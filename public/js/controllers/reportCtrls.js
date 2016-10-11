app.controller('dailyCtrl',function($scope,$http,$filter,appRest){
  $scope.deptName="foodCtrl"
$scope.filTest=[];
      var promiseToken= appRest.getTokenList();
        promiseToken.then(function(response) {
            $scope.tokens=response;
            console.log('response '+response);
            $scope.testFil();
        }, function(reason) {
            alert('Failed: ' + reason);
        });   
    $scope.testFil=function(){
//        $scope.filTest=$filter('group')($scope.tokens,'tokenType');
        alert('called');
    };
});
app.controller('monthlyReportCtrl',function($scope,$http,$filter,appRest){
  $scope.deptName="foodCtrl"
        var promiseGroup= appRest.getGroupMonthlyList();
        promiseGroup.then(function(response) {
            $scope.gruopMonthlyList=response;
            console.log('response '+response);
            $scope.testFil();
        }, function(reason) {
            alert('Failed: ' + reason);
        });
        var promiseFood= appRest.getFoodMonthlyList();
        promiseFood.then(function(response) {
            $scope.foodMonthlyList=response;
            console.log('response '+response);
            $scope.testFil();
        }, function(reason) {
            alert('Failed: ' + reason);
        });
        var promiseEmplyee= appRest.getEmployeeMonthlyList();
        promiseEmplyee.then(function(response) {
            $scope.empMonthlyList=response;
            console.log('response '+response);
            $scope.testFil();
        }, function(reason) {
            alert('Failed: ' + reason);
        });

  
});
app.controller('employeeReportCtrl',function($scope,$http,$filter,appRest){
  $scope.deptName="foodCtrl"

  
});