(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/teams");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.app={title:'',description:'', image_url:'', place:'', date:'', time:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={title:'',description:'', image_url:'', place:'', date:'', time:''};
    };
    $scope.delete=function(item){
        $scope.DB.$remove(item);
    };
    $scope.edit=function(value){
        $scope.app=value;
    };
    $scope.ver=function(value){
        $scope.app=value;
    };
    });
})();