var express = require('express');
var app=express();

var bodyParser = require('body-parser');
var customerController = require('./controller');

const http = require('http');
const url = require('url');

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
app.use(express.static('webharjoitus'));

// REST API Asiakas
app.route('/Types')


app.route('/Asiakas')

app.get('/', function(request, response){
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
