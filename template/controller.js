
function mainController($scope, $routeParams) {
  $scope.headTitle = 'This is Host';
}

function errController($scope, $routeParams) {
  $scope.text = $routeParams.text;
}