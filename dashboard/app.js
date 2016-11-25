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
    app.controller('AppCtrl', function($scope) {
    $scope.rating = 8;
    $scope.bugs = 6;

  });

})();


