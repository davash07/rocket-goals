
(function(){
    var app = angular.module('app',["firebase" ])
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/user")
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.app={nickname:'', name:'', last_name:'', picture:'', rol:'', tech: '', social_network:''};
    $http.get('https://rocket-goals-development.firebaseio.com/technology.json').success(function (data) {
    $scope.technology = data;
    var storage = firebase.storage().ref('img')
 });
    $scope.add=function(){
        var file = $('#file').get(0).files[0];
        storage.child(file.name).put(file).then(function() {
                //obtenemos la url de descarga de la imagen
                storage.child(file.name).getDownloadURL().then(function (url) {
                })
            })
        $scope.DB.$add($scope.app);
        $scope.app={nickname:'', name:'', last_name:'', picture: url , rol:'', tech: '', social_network:''};
    };
    $scope.delete=function(item){
    $scope.DB.$remove(item);
  };
    $scope.ver=function(value){
        $scope.app=value;
    };
});
  
})();
    