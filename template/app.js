var routeApp = angular.module('myapp', ['ngRoute']);

routeApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			'templateUrl': 'index.html',
			'controller': 'mainController'
		})
		.when('/error/:text', {
			'templateUrl': 'error.html',
			'controller': 'errController'
		})
		.otherwise({
			'redirectTo': '/error'
		});	
}]);