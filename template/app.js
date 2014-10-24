var routeApp = angular.module('myapp', ['ngRoute']);

routeApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			'template': '<h3>{{ headTitle }}</h3>',
			'controller': mainController
		})
		.when('/error/:text', {
			'template': '<h3>{{ text }}</h3>',
			'controller': errController
		})
		.otherwise({
			'redirectTo': '/error'
		});	
}]);