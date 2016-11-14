
(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial"])
    app.controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  };
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
    });
})();

(function(){
    var appp = angular.module('appp',["firebase" ])
    appp.controller('appCtrll',function($scope, $firebase){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/user/");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.titulo='Sugerencia';
    $scope.appp={last_name:'', name:'', nickname:'', rol:''};
   
    });
    
})();
