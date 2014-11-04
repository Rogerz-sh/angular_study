define(function () {
	var user = {
		'name': 'Roger', 
		'password': '123456',
		'remember': true
	}

	return {
		getUser: function () {
			return user;
		}
	}
});