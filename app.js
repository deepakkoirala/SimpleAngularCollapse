var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  
  $scope.arr= [
    {name:"Head1",desc:"Head1Desc"},
    {name:"Head2",desc:"Head2Desc"},
    {name:"Head3",desc:"Head3Desc"},
    {name:"Head4",desc:"Head4Desc"}
    ];
    
    $scope.resetIt = function(){
      for(var i=0;i<$scope.arr.length;i++){
        $scope.arr[i].showIt=false;
      }
    }
    
});