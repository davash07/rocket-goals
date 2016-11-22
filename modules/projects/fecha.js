(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/fecha/")
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.app={fecha:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={fecha:''};
    };
    $scope.delete=function(item){
    $scope.DB.$remove(item);
        

  };
    $scope.ver=function(value){
        $scope.app=value;
    };
});
  
})();


  