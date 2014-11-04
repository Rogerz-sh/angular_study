// require.config({
// 	'paths': {
// 		'angular': '../lib/angular.min'
// 		,'jquery': '../bootstrap/jquery.min'
// 		,'users': 'users'
// 	},
// 	'shim': {
// 		'angular': {
// 			'exports': 'angular'
// 		},
// 		'jquery': {
// 			'exports': '$'
// 		}
// 	}
// });

// require(['angular', 'jquery', 'users'], function (angular, $, users) {
	
// });

var myModule = angular.module('myapp', []);

myModule.factory('users', function () {
	return {
		getUser: function () {
			return {
				'name': 'Roger', 
				'password': '123456',
				'remember': true
			}
		}
	}
});

myModule.controller('scopeController', ['$scope', 'users', function ($scope, users) {
	$scope.info = {
		title: 'Require.js'
	}

	$scope.$watch('user.name', function (newName) {
		console.log(newName == $scope.user.name);
	})

	$scope.user = users.getUser();
}]);
