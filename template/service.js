routeApp.factory('users', ['$http', function ($http) {
	return {
		getUser: function () {
			return {
				'name': 'Roger',
				'password': '12345678',
				'sex': 'female',
				'fav': ['css'],
				'remember': true
			}
		}
	}
}])