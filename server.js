var express = require('express');
var app=express();

var bodyParser = require('body-parser');
var controller = require('./controller');

const http = require('http');
const url = require('url');


var cookieParser = require('cookie-parser');
app.use(cookieParser());

var redirect = require("express-redirect");
redirect(app);

const hostname = '127.0.0.1';
const port = process.env.PORT || 3002;
//evästeet

//CORS middleware
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


// Staattiset filut
app.use(express.static('js'));

// REST API Asiakas
app.route('/Types')

app.route('/logi/:nimi/:salasana')
  .get(controller.login);

app.route('/regi/:nimi/:salasana')
  .post(controller.rekisteroi);

app.get('/', function(request, response){
  var keksi;
  console.log("asd", request.cookies);
  keksi = request.cookies;
  console.log(keksi[0]);
  if(keksi[0] == null){
    console.log(keksi[0]);
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
  response.sendFile('login.html', { root: __dirname + "/html" } );
});

app.get('/chatti', function(request, response){
  response.sendFile('main.html', { root: __dirname + "/html" } );

});

app.listen(port, hostname, () => {
  console.log(`Server running AT http://${hostname}:${port}/`);
});

/*
app.listen(port, () => {
    console.log(`Server running AT http://${port}/`);
  });
*/
