
(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/user")
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.app={nickname:'', name:'', last_name:'', picture:'', rol:'', tech: '', social_network:''};
    $http.get('https://rocket-goals-development.firebaseio.com/technology.json').success(function (data) {
    $scope.technology = data;
 });
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={nickname:'', name:'', last_name:'', picture:'', rol:'', tech: '', social_network:''};
    };
    $scope.delete=function(item){
    $scope.DB.$remove(item);
  };
    $scope.views=function(value){
        if (checkbox == true){
            $firebase.call($asArry);
            $http.post('https://rocket-goals-development.firebaseio.com/technology.json').finally().catch;
        }else{
            $scope.$apply.DB.image_url('{{value.picture}}');
        }
        
    }
    $scope.ver=function(value){
        $scope.app=value;
    };
});
  
})();

