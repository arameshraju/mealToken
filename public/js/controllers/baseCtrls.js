
app.controller('defaultCtrl',function($scope){
  
});
app.controller('menuCtrl',['$scope','$routeParams',function($scope,$routeParams){
$scope.menuSel=$routeParams.typ;                         
                          
}]);