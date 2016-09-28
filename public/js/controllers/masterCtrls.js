
app.controller('deptCtrl',function($scope,$http){
  $scope.deptName="NewDepartMent"
  $scope.getData=function(){
  $http.get('/api/department').then(function(response) {
        $scope.department=response.data; 
  });      
  }
$scope.getData();
      
  $scope.deptSave=function(){
    $http.post("/api/department",$scope.master).then(function(response) {
        alert("Saved");
    });
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
