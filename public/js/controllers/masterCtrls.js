
app.controller('deptCtrl',function($scope){
  $scope.deptName="NewDepartMent"
  $scope.deptSave=function(){
    alert("This is Demo App, You can't save New");  
  };
});

app.controller('empCtrl',function($scope){
  $scope.deptName="emp"
});

app.controller('storeCtrl',function($scope){
  $scope.deptName="store"
});

app.controller('sGroupCtrl',function($scope){
  $scope.deptName="sGroupCtrl"
});
app.controller('stockCtrl',function($scope){
  $scope.deptName="sGroupCtrl"
});

app.controller('foodCtrl',function($scope){
  $scope.deptName="foodCtrl"
});
