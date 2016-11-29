(function() {
    var app = angular.module('app',["ngMaterial"]);
    app.controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  };

    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
    });

    app.controller('AppCtrl', function($scope, $http) {
    $scope.rating = 8;
    $scope.status = "true";
    $scope.bugs = 6;
    $scope.pro = {
        height: "10px"
    }
    /*$scope.app = {ClientId:'', Description: '', Fecha_retadora: '', Fin: '', Imagen_downloadUrl:'', Inicio: '', Project_Name: '', Tech_Name_4: '', Image_2: '', Image_4_downloadUrl: '', Tech_Name_3: '', Image_3: '', Image_3_downloadUrl: '', Image_2_downloadUrl: '', Tech_Name_2: '', Tech_Name_1: '', Reward_2: '', Reward_1: '', Image_reward_2: '', Image_reward_1: '', Board_Id_Trello: '', Limite_Bugs: '', Image_4: '', ProjectManager: '', ProjectUsers: '', Rocket_Dashboard: '', Image_reward_2_downloadUrl: '', image_downloadUrl: '', Image_reward_1_downloadUrl: ''};
    */$scope.ver=function(value){
    	$scope.app=value;
	}
    $scope.free={
            width: "78%"
        };
    $scope.ver=function(value){
        $scope.app=value;
    };
   	$scope.urlsimgs= "&authtoken=6a701202eb76ebf85132b6ba39f6831d";

 /*
   $http.get('https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d').then(function(res) {
        res.set('Access-Control-Allow-Origin', '*');
    	$scope.info = res.data;
    });

 */

 	$scope.listOfCustomers = null;
 	$http.get('https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d')
            .success(function (data) {
                $scope.listOfCustomers = data;
            })
            .error(function () {
                alert("no conectado");
            });
 	$http.get('../apizoho.json').success(function(data) {
 		$scope.info = data;
	});
 	$scope.ver=function(value){
		$scope.app=value;
	};
/*
 	$http.get('https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d',
		{
			headers: {
				'Content-Type': 'application/json' ,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
				'Access-Control-Allow-Headers':'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token'
			}
		}).success(function(response) {
            alert("Ok");
        	alert(JSON.stringify(data));
            $scope.info = response.data;
        }).
        error(function (data) {
            alert(JSON.stringify(data));
            alert("No Conectado");
        });*/
  });
  app.directive('starRating',
	function() {
		return {
			restrict : 'A',
			template : '<ul class="rating">'
					 + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
					 + '<i class="fa fa-heart"></i>'
					 + '</li>'
					 + '</ul>',
			scope : {
				ratingValue : '=',
				max : '=',
				onRatingSelected : '&'
			},
			link : function(scope) {
				var updateStars = function() {
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++) {
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};
				
				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				);
			}
		};
		});

})();