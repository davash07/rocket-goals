
(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/goals");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.app={description:'', end_limit:'', rewards:''};
    $http.get('https://rocket-goals-development.firebaseio.com/rewards.json').success(function (data) {
    $scope.reward = data;
    });
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={description:'', end_limit:'', rewards:''};
    };
    $scope.delete=function(item){
    $scope.DB.$remove(item);
        
  };
    $scope.ver=function(value){
        $scope.app=value;
    };
});
  
})();

