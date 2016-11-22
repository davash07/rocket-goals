(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial", "firebase"])
    app.controller('AppCtrl', function($scope, $firebase, $http) {
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project/");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.bugs = 6;

    $http.get('ejemplo.json').then(function(response) {
      $scope.info = response.data;
    });
        /*
    $http.jsonp('ejemplo.json', {jsonpCallbackParam: 'callback'}).then(function(response) {
      $scope.info = response.data;
    });
    /*
    $http({
        method: 'GET',
        url: 'https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d'}).success(function(data) {

    $scope.info = data.info; 
    $scope.info = [];
  });
*/
  });
})();
