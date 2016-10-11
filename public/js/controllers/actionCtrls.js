
app.controller('tokenCtrl',function($scope,$http,$filter){
  $scope.deptName="tokenCtrl"
  $scope.tokenData={tokendate:new Date(),empid:'',name:'',tokenType:'',fooditem:'',foodcost:0,fooddiscount:0};
 $scope.master={tokendate:new Date()};    
$scope.selEmp={};
$scope.selFood={};
$scope.emp={empid:'',fooditem:'' }    ;
    
    $scope.currentData={name:'',foodcost:'',fooddiscount:0};
    //Watch employee id to enter
    $scope.$watch('emp.empid',function(data){
        if(data){
            var d = $filter('filter')($scope.employee,{empId:data});
            if(d.length==1)  {
                 $scope.selEmp=d[0];    
            }else{
                 $scope.selEmp={};
            }
            
        } else{
                 $scope.selEmp={};
        }
    });
    $scope.$watch('master.fooditem',function(data){
        if(data){
            var d = $filter('filter')($scope.foodItem,{fooditem:data});
            if(d.length==1)  {
                 $scope.selFood=d[0];    
            }else{
                 $scope.selFood={};
            }
            
        } else{
                 $scope.selFood={};
        }
    });
    //Employee Validation and Saving
$scope.empValidation=function(){
    if(!$scope.emp.empid) {
        alert("Enter Employee id");
        return false;
    }
    if(!$scope.master.fooditem) {
        alert("Select Food");
        return false;
    
    }
    if(angular.equals({}, $scope.selEmp)){
        alert('Employee not Found');
        return false;
        
    }
    if(angular.equals({}, $scope.selFood)) {
        aler("Food Itme not found");
            return false;
        }
    
    return true;
};
$scope.saveEmpToken=function(){
        if($scope.empValidation()){
            var disc=(parseFloat( $scope.selFood.regrate) - parseFloat($scope.selFood.emprate));
             $scope.tokenData={tokendate:$scope.master.tokendate ,empid:$scope.emp.empid,name: $scope.selEmp.name,tokenType:'emp',fooditem:$scope.master.fooditem,foodcost: $scope.selFood.emprate,fooddiscount:disc };
              $http.post("/api/token",$scope.tokenData).then(function(response) {
                    alert("Saved");
                });
        }

        
};
    //Guest validation and Saving data
$scope.guestValidation=function(){
    if(!$scope.gst.empid) {
        alert("Enter Guest Name");
        return false;
    }
    if(!$scope.master.fooditem) {
        alert("Select Food");
        return false;
    
    }
    if(angular.equals({}, $scope.selFood)) {
        aler("Food Itme not found");
            return false;
        }
    
    return true;
};    
$scope.saveGuestToken=function(){
        if($scope.guestValidation()){
            var disc=(parseFloat( $scope.selFood.regrate) - parseFloat($scope.selFood.emprate));
             $scope.tokenData={tokendate:$scope.master.tokendate ,empid:'',name: $scope.gst.empid,tokenType:'guest',fooditem:$scope.master.fooditem,foodcost: $scope.selFood.regrate,fooddiscount:0 };
              $http.post("/api/token",$scope.tokenData).then(function(response) {
                    alert("Saved");
                });
        }

        
};
//Admin Validation and saving data    
    $scope.adminValidation=function(){
    if(!$scope.admin.empid) {
        alert("Enter Guest Name");
        return false;
    }
    if(!$scope.master.fooditem) {
        alert("Select Food");
        return false;
    
    }
    if(angular.equals({}, $scope.selFood)) {
        aler("Food Itme not found");
            return false;
        }
    
    return true;
};   
    


$scope.saveAdminToken=function(){
        if($scope.adminValidation()){
            var disc=(parseFloat( $scope.selFood.regrate) - parseFloat($scope.selFood.emprate));
             $scope.tokenData={tokendate:$scope.master.tokendate ,empid:'',name: $scope.admin.empid,tokenType:'admin',fooditem:$scope.master.fooditem,foodcost: 0,fooddiscount:$scope.selFood.regrate };
              $http.post("/api/token",$scope.tokenData).then(function(response) {
                    alert("Saved");
                });
        }

        
};
    
    
    $scope.save1Action=function(){
    $http.post("/api/token",$scope.master).then(function(response) {
        alert("Saved");
    });
    };
});

app.controller('purchaseCtrl',function($scope){
  $scope.deptName="purchaseCtrl"
});

app.controller('purchaseReturnCtrl',function($scope){
  $scope.deptName="purchaseReturnCtrl"
});
app.controller('stockIssueCtrl',function($scope){
  $scope.deptName="stockIssueCtrl"
});
