(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial", "firebase"])
    app.controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  };
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
    });
    app.controller('AppCtrl', function($scope, $firebase, $http) {
    $scope.rating = 8;
        
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project/");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.bugs = 6;

  });

})();


