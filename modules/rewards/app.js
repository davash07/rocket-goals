
(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/rewards")
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.app={name:'', description:'', picture:''};
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={name:'', description:'', picture:''};
    };
    $scope.delete=function(item){
    $scope.DB.$remove(item);
        
  };
    $scope.ver=function(value){
        $scope.app=value;
    };
});
  
})();

