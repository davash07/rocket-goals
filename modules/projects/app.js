
(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial", "firebase"])
    app.controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
    };
    
    app.controller('AppCtrl', function($scope) {
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
  })
    
    
    app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.app={name:'' , description:'', start_date:'', end_date:'', picture:'', goals: '', team: '', customer:''};
    $http.get('https://rocket-goals-development.firebaseio.com/goals.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
    $scope.goals = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/team.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
    $scope.team = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/customer.json').success(function (data) {
   //enviamos los datos a la vista con el objeto $scope
    $scope.customer = data;
    });
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={name:'' , description:'', start_date:'', end_date:'', picture:'', goals: '', team: '', customer:''};
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
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
    });
})();
