var express = require('express');
var app=express();

var bodyParser = require('body-parser');
var controller = require('./controller');

const http = require('http');
const url = require('url');

const users = {}

global.rooms = ['room1']

const io = require('socket.io')(3000)
io.on('connection', socket => {

  socket.on('new-user', name => {
    users[socket.id] = name
    socket.room = 'room1';
    socket.join('room1');
    socket.in(socket.room).emit('user-connected', name)
  })

  socket.on('send-chat-message', message =>{
    console.log(message);
    //socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]})
    socket.in(socket.room).emit('chat-message', {message:message, name: users[socket.id]})
  })

  socket.on('disconnect', () => {
    socket.in(socket.room).emit('user-disconnected', users[socket.id])
    socket.leave(socket.room)
    delete users[socket.id]
  })

  socket.on('huoneen-vaihto', huone =>{
    socket.in(socket.room).emit('user-disconnected', users[socket.id])
    socket.leave(socket.room);
    socket.room = huone;
    socket.join(huone);
    socket.in(socket.room).emit('user-connected', users[socket.id])
    console.log(socket.room);
  })

})

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var redirect = require("express-redirect");
redirect(app);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3002;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(express.static( __dirname + ''));

app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.static('js'));


app.route('/logi/:nimi/:salasana')
  .get(controller.login);

app.route('/muoks/:vs/:us')
  .post(controller.muokkaus);

app.route('/regi/:nimi/:salasana')
  .post(controller.rekisteroi);

app.route('/haehuoneet')
  .get(controller.huoneHaku);

app.route('/luoHuon/:huonNimi')
  .post(controller.huoneenLuonti);

app.get('/', function(request, response){
  var b = "";
  var x = request.headers.cookie;

  console.log(b[0]);
  if(x == null){
    response.sendFile('login.html', { root: __dirname + "/html" } );
  } else {
    var b = x.split('=');
  }

  if(b[0] == null || b[0] == "io"){
    response.clearCookie("io");
    console.log(b[0]);
    response.sendFile('login.html', { root: __dirname + "/html" } );
    console.log("login");
  } else {
    response.sendFile('main.html', { root: __dirname + "/html" } );
    console.log("main");
  }
});

app.get('/rekisteroi', function(request, response){
  response.sendFile('rekist.html', { root: __dirname + "/html" } );
});

app.get('/login', function(request, response){
  var b = "";
  var x = request.headers.cookie;

  console.log(b[0]);
  if(x == null){
    response.sendFile('login.html', { root: __dirname + "/html" } );
  } else {
    var b = x.split('=');
  }

  if(b[0] == null || b[0] == "io"){
    response.clearCookie("io");
    console.log(b[0]);
    response.sendFile('login.html', { root: __dirname + "/html" } );
    console.log("login");
  } else {
    response.sendFile('main.html', { root: __dirname + "/html" } );
    console.log("main");
  }
});

app.get('/chatti', function(request, response){
  var b = "";
  var x = request.headers.cookie;

  console.log(b[0]);
  if(x == null){
    response.sendFile('login.html', { root: __dirname + "/html" } );
  } else {
    var b = x.split('=');
  }
  if(b[0] == null || b[0] == "io"){
    response.clearCookie("io");
    console.log(b[0]);
    response.sendFile('login.html', { root: __dirname + "/html" } );
    console.log("login");
  } else {
    response.sendFile('main.html', { root: __dirname + "/html" } );
    console.log("main");
  }

});

app.get('/muokkaus', function(request, response){
  var b = "";
  var x = request.headers.cookie;

  console.log(b[0]);
  if(x == null){
    response.sendFile('login.html', { root: __dirname + "/html" } );
  } else {
    var b = x.split('=');
  }
  if(b[0] == null || b[0] == "io"){
    response.clearCookie("io");
    console.log(b[0]);
    response.sendFile('login.html', { root: __dirname + "/html" } );
    console.log("login");
  } else {
    response.sendFile('tietmuok.html', { root: __dirname + "/html" } );
    console.log("main");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running AT http://${hostname}:${port}/`);
});

/*
app.listen(port, () => {
    console.log(`Server running AT http://${port}/`);
  });
*/
