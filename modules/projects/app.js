
(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial", "firebase"])
    app.controller('addData',addData); 
        function addData($http, $scope) { 
        var add = this;
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
         $http.get('https://rocket-goals-development.firebaseio.com/user/.json').success(function (data) {
        $scope.user = data;
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
                        limit_date: data.limit_date,
                        customer:data.customer,
                        technologyone: data.tecnologyone,
                        technologytwo: data.tecnologytwo,
                        technologythree: data.tecnologythree,
                        teamone: data.teamone,
                        teamtwo: data.teamtwo,
                        teamthree: data.teamthree
                       
                    })
                })
            })

        }
    }

})();

  