app.constant("appConst",{
    "REST_DEPT":"/api/department"
});
app.service('appRest',['$http','$q','appConst',function ($http,$q,appConst){
     console.log("this is Service Construct Meesage");
    var service = this;
    service.getTestMessage=function(){
        console.log("this is Service Test Meesage");
        console.log("this is Service Test Meesage" + appConst.REST_DEPT);
    };
   service.getDepartmentList=function(){
       console.log("Calling Department List");
        var deferred = $q.defer();
     $http.get('/api/department' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
               console.log(msg);
       });
     return deferred.promise;

  };
    service.getEmployeeList=function(){
       console.log("Calling Employee List");
        var deferred = $q.defer();
     $http.get('/api/employee' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };
    service.getStoreList=function(){
       console.log("Calling Store List");
        var deferred = $q.defer();
     $http.get('/api/store' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };
    service.getFooditemList=function(){
       console.log("Calling fooditem List");
        var deferred = $q.defer();
     $http.get('/api/fooditem' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };    
    
    service.getStockGroupList=function(){
       console.log("Calling stockgroup List");
        var deferred = $q.defer();
     $http.get('/api/stockgroup' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };        
    service.getStockItemList=function(){
       console.log("Calling stockitem List");
        var deferred = $q.defer();
     $http.get('/api/stockitem' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };            
    service.getTokenList=function(){
       console.log("Calling Token List");
        var deferred = $q.defer();
     $http.get('/api/token' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };    
    service.getGroupMonthlyList=function(){
       console.log("Calling Token List");
        var deferred = $q.defer();
     $http.get('/api/reports/groupmonthly' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };  
    service.getFoodMonthlyList=function(){
       console.log("Calling Token List");
        var deferred = $q.defer();
     $http.get('/api/reports/foodmonthly' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };  
    service.getEmployeeMonthlyList=function(){
       console.log("Calling Token List");
        var deferred = $q.defer();
     $http.get('/api/reports/employeemonthly' )
       .success(function(response) { 
          deferred.resolve(response);
       }).error(function(msg) {
          deferred.reject(msg);
                       console.log(msg);
       });
     return deferred.promise;

  };  
    
}
]);

//ShoppingListAddController.$inject = ['ShoppingListService'];
