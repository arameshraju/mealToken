
app.controller('deptCtrl',function($scope,$http){
  $scope.deptName="NewDepartMent"

      
  $scope.deptSave=function(){
    $http.post("/api/department",$scope.master).then(function(response) {
        alert("Saved");
    });
  };
});

app.controller('empCtrl',function($scope,$http){
  $scope.deptName="emp"
  
  $scope.saveAction=function(){
    $http.post("/api/employee",$scope.master).then(function(response) {
        alert("Saved");
    });
  };
});

app.controller('storeCtrl',function($scope,$http){
  $scope.deptName="store"
    $scope.saveAction=function(){
    $http.post("/api/store",$scope.master).then(function(response) {
        alert("Saved");
    });
  };
});

app.controller('sGroupCtrl',function($scope,$http){
  $scope.deptName="sGroupCtrl"
    $scope.saveAction=function(){
    $http.post("/api/stockgroup",$scope.master).then(function(response) {
        alert("Saved");
    });
  };
});
app.controller('stockCtrl',function($scope,$http){
  $scope.deptName="stockitem"
    $scope.saveAction=function(){
    $http.post("/api/stockitem",$scope.master).then(function(response) {
        alert("Saved");
    });
  };
});

app.controller('foodCtrl',function($scope,$http){
  $scope.deptName="foodCtrl"
    $scope.saveAction=function(){
    $http.post("/api/fooditem",$scope.master).then(function(response) {
        alert("Saved");
    });
  };
});
