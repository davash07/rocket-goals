(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();

    $scope.app={name:'', start_date:'', description:''};

    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={name:'', start_date:'', description:''};
    };
    $scope.delete=function(item){
        $scope.DB.$remove(item);
    };
    $scope.edit=function(value){
        $scope.app=value;
        $scope.DB.$remove(value)
    };
    $scope.ver=function(value){
        $scope.app=value;
    }
    });
    
})();

