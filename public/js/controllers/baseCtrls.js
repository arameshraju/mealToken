
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