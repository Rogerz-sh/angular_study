routeApp
.directive('myForm', function () {
	return {
		'restrict': 'A',
		'replace': true,
		'scope': {
			'myUser': '&'
		},
		'controller': 'formController',
		'templateUrl': 'form.html'
	}
})
.directive('myOtherForm', function () {
	return {
		'restrict': 'A',
		'replace': true,
		'scope': {
			'myUser': '&'
		},
		'controller': 'otherFormController',
		'templateUrl': 'anotherform.html'
	}
})