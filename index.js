/**
 * Created with JetBrains WebStorm.
 * User: zhe.zhang
 * Date: 14-11-13
 * Time: 下午1:59
 * To change this template use File | Settings | File Templates.
 */
var express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http);

app.use('/css', express.static(__dirname + '/css'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/src', express.static(__dirname + '/src'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', { layout: false });

app.get('/', function (req, res) {
  res.render('index');
});

app.use(function (req, res) {
  res.redirect('/');
});

http.listen(process.env.VCAP_APP_PORT || 3000, function () {
  console.log('listen at port 3000...');
});

var userList = {};

io.on('connection', function (socket) {
  socket.emit('connected');

  socket.on('post', function (msg) {
    socket.broadcast.emit('message', msg);
  });

  socket.on('join', function (name) {
    if (name in userList) userList[name] = true;
    socket.emit('join', null, { msg: 'success', name: name });
    socket.broadcast.emit('message', { name: 'System', msg: name + ' has joined chat room!' });
  });
})