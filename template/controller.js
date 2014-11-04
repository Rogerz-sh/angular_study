
routeApp.controller('baseController', ['$scope', '$interval', function ($scope, $interval) {
	$scope.progress = {
		num: 0
	}

	var inv;
	inv = $interval(function () {
		if ($scope.progress.num >= 100) {
			$interval.cancel(inv);
			inv = undefined;
			return;
		}
		$scope.progress.num++;
	}, 100);
}]);

routeApp.controller('mainController', ['$scope', 'users', function ($scope, users) {
	$scope.userInfo = users.getUser();
}]);

routeApp.controller('formController', ['$scope', function ($scope) {
	$scope.userInfo = angular.extend({}, $scope.myUser());
	$scope.save = function () {
		console.log($scope.userInfo)
	}
	$scope.reset = function () {
		$scope.userInfo = {
			'name': '',
			'password': '',
			'remember': false
		}
	}

	$scope.setFav = function (fav) {
		var idx = $scope.userInfo.fav.indexOf(fav.key);
		if (idx > -1) {
			$scope.userInfo.fav.splice(idx, 1);
		} else {
			$scope.userInfo.fav.push(fav.key);
		}
	}

	$scope.favs = [{ 'key': 'js', 'value': 'JS' }, { 'key': 'css', 'value': 'CSS' }, { 'key': 'html', 'value': 'HTML' }]

	$scope.sexList = [
	{ 'key': 'male', 'value': '男'},
	{ 'key': 'female', 'value': '女'}
	];

}]);

routeApp.controller('otherFormController', ['$scope', function ($scope) {
	$scope.userInfo = angular.extend({}, $scope.myUser());
	$scope.save = function () {
		console.log($scope.userInfo)
	}
	$scope.reset = function () {
		$scope.userInfo = {
			'name': 'Roger',
			'password': '12345678',
			'remember': true
		}
	}
}]);

routeApp.controller('errController', ['$scope', '$routeParams', function ($scope, $routeParams) {
	$scope.text = $routeParams.text;
}]);

