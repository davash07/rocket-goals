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

	$scope.app={ClientId:'', Description:'', Fecha_retadora:'', Fin:'', Imagen_downloadUrl:'', Inicio:'', Project_Name:'' };
    $scope.ver=function(value){
    	$scope.app=value;
	}
    $scope.free={
            width: "78%"
        }
    $scope.ver=function(value){
        $scope.app=value;
    };
   $scope.urlsimgs= "&authtoken=6a701202eb76ebf85132b6ba39f6831d";
 /*
   $http.get('https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d').then(function(res) {
        res.set('Access-Control-Allow-Origin', '*');
    	$scope.info = res.data;
    });
    $http.get('https://people.zoho.com/people/api/forms/P_TimesheetJobsList/getRecords?authtoken=6a701202eb76ebf85132b6ba39f6831d',
            {
                headers: {
                    'Content-Type': 'application/json' ,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers':'X-Requested-With'
                }
            }).success(function(response) {
            alert("Ok");
        $scope.info = response.data;

        }).
        error(function (data) {
            alert(JSON.stringify(data));
            alert("No Conectado");
        });
 */
        $http.get('../apizoho.json').then(function(response) {
                $scope.info = response.data;
            });

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
