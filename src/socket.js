/**
 * Created with JetBrains WebStorm.
 * User: zhe.zhang
 * Date: 14-11-14
 * Time: 上午11:53
 * To change this template use File | Settings | File Templates.
 */
myApp.factory('socket', ['$rootScope', function ($rootScope) {
  var socket = io.connect();

  return {
    'on': function () {
      var args = Array.prototype.splice.call(arguments, 0);
      if (args.length === 0) {
        throw new Error('need at least 1 arguments');
        return;
      }
      socket.on.apply(socket, args);
    },
    'emit': function () {
      var args = Array.prototype.splice.call(arguments, 0);
      if (args.length === 0) {
        throw new Error('need at least 1 arguments');
        return;
      }
      socket.emit.apply(socket, args);
    }
  }
}])