
(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial", "firebase"])
    app.controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
    };
    app.controller('AppCtrl',function($scope, $firebase, $http){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.quantity = 5;
    $scope.app={name:'' , description:'', start_date:'', end_date:'', picture:'', goals: '', team: '', customer:'', technology:'', bugs:'', item:''};
    $http.get('https://rocket-goals-development.firebaseio.com/rewards/.json').success(function (data) {
    $scope.reward = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/customer/.json').success(function (data) {
    $scope.customer = data;
    $scope.selected = [];
    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };
    });
    app.controller('AppCtrl', function($scope, $firebase, $http){
    function SendData($scope){
        for(i:0; i:3 ; i++){
            $scope.DB.$add.technology($scope.app);
            $scope.app={name:'', picture:''};
        }
    
    }
    })
    $http.get('https://rocket-goals-development.firebaseio.com/technology/.json').success(function (data) {
    $scope.technology = data;
    });
    $http.get('https://rocket-goals-development.firebaseio.com/user/.json').success(function (data) {
    $scope.user = data;
    });
    $scope.add=function(){
        $scope.DB.$add($scope.app);
        $scope.app={name:'' , description:'', start_date:'', end_date:'', picture:'', goals: '', team: '', customer:'', technology:'', bugs:'', item:''};
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
    
    app.controller('addData',addData);
        function addData() {
        var add = this;
        add.info = addInfo;
        // Hacemos referecia al storage y la base de datos
        var database = firebase.database().ref('/project');
        var storage = firebase.storage().ref('img')

        function addInfo(data) {
            var file = $('#file').get(0).files[0];
    
            storage.child(file.name).put(file).then(function() {
                
                storage.child(file.name).getDownloadURL().then(function (url) {
            
                    database.push({
                        picture: url
                    })
                })
            })

        }
    }
    
})();

        

