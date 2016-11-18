(function() {
  'use strict';
    var app = angular.module('app',["ngMaterial", "firebase"])
    app.controller('AppCtrl', AppCtrl);
    function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';
  };
    app.controller('appCtrl',function($scope, $firebase){
    var ref = new Firebase("https://rocket-goals-development.firebaseio.com/project/");
    var sync = $firebase(ref);
    $scope.DB = sync.$asArray();
    $scope.bugs = 6;
    $scope.rating1 = 50;
    $scope.appp={ name:'', picture:'', limit_bugs:''};
   
    });
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue');
    });
    app.controller('AppCtrl', function($scope) {
    $scope.rating = 8;
  })
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
			link : function(scope, elem, attrs) {
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
	}
);
})();


