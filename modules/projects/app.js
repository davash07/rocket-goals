
(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial", "firebase"])
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
    });
    app.controller('addData',addData);
        function addData($http, $scope) {
        var add = this;
            $scope.example = {
         value: new Date(2013, 9, 22)
       };
        add.info = addInfo;
            
        var database = firebase.database().ref('/project');
        var storage = firebase.storage().ref('img')
        $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
        $scope.customer = data;
        });
        $http.get('https://rocket-goals-development.firebaseio.com/rewards/.json').success(function (data) {
        $scope.reward = data;
        });
        $http.get('https://rocket-goals-development.firebaseio.com/technology/.json').success(function (data) {
        $scope.technology = data;
        });
        function addInfo(data) {
            var file = $('#file').get(0).files[0];
            storage.child(file.name).put(file).then(function() {          
                storage.child(file.name).getDownloadURL().then(function (url) {
                    database.push({
                        name: data.name,
                        description: data.description,
                        start_date: data.start_date,
                        end_date: data.end_date,
                        picture: url,
                        limit_bugs: data.limit_bugs,
                        limit_date: data.limit_date
                    })
                })
            })

        }
    }
app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.quantity = 5;
    $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
        $scope.customer = data;
        });
    $scope.app={name:'' , description:'', start_date:'', end_date:'', picture:'', goals: '', team: '', customer:'', technology:'', bugs:'', item:''};
    
    $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
    $scope.customer = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/technology/.json').success(function (data) {
    $scope.technology = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/user/.json').success(function (data) {
    $scope.user = data;
    });
    });

   
    /*

    app.controller('addData',
            function ($scope, $filter) {

            $scope.$watch('datevalue', function (val) {

                $scope.result = $filter('date')(new Date(), );

            }, true);
        }
    );
    //
   app.controller('appCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.quantity = 5;
    $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
        $scope.customer = data;
        });
    $scope.app={name:'' , description:'', start_date:'', end_date:'', picture:'', goals: '', team: '', customer:'', technology:'', bugs:'', item:''};
    
    $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
    $scope.customer = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/technology/.json').success(function (data) {
    $scope.technology = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/user/.json').success(function (data) {
    $scope.user = data;
    });
    });*/
})();

   /* app.controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
    };
    app.controller('AppCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.quantity = 5;
    $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
        $scope.customer = data;
        });
    $scope.app={name:'' , description:'', start_date:'', end_date:'', picture:'', goals: '', team: '', customer:'', technology:'', bugs:'', item:''};
    $http.get('https://rocket-goals-development.firebaseio.com/rewards/.json').success(function (data) {
    $scope.reward = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
    $scope.customer = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/technology/.json').success(function (data) {
    $scope.technology = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/user/.json').success(function (data) {
    $scope.user = data;
    });
    });
    */
    
        

