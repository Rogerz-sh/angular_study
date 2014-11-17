/**
 * Created with JetBrains WebStorm.
 * User: zhe.zhang
 * Date: 14-11-13
 * Time: 下午2:42
 * To change this template use File | Settings | File Templates.
 */
var myApp = angular.module('myapp', ['ngSanitize', 'ngCookies']);

myApp.controller('mainController', ['$scope', '$cookies', 'socket', function ($scope, $cookies, socket) {

  $scope.name = 'Guest';
  $scope.messages = [];
  $scope.connected = false;

  function addMessage(info) {
    $scope.messages.push(info);
  }

  socket.on('message', function (info) {
    addMessage(info);
    $scope.$apply();
  });

  socket.on('connected', function () {
    socket.emit('join', window.prompt('Please enter your name:'));
  })

  socket.on('join', function (err, info) {
    if (err) return;
    if (info.msg == 'success') $scope.connected = true;
    $scope.name = info.name;
    $scope.messages.push({ name: 'System', msg: 'Joined success!' });
    $scope.$apply();
  })

  $scope.postMessage = function () {
    var info = { name: $scope.name, msg: $scope.message };
    socket.emit('post', info);
    addMessage(info);
  }

}])