'use strict'


// Asenna ensin mysql driver
// npm install mysql --save

var mysql = require('mysql');
const querystring = require('querystring');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root', // HUOM! Älä käytä root:n tunnusta tuotantokoneella!!!!
  password : 'salasana',
  database : 'chatpalvelu'
});

module.exports =
{
    fetchAll: function(req, res){
        connection.query("SELECT * FROM Asiakas", function(error, results, fields){
          console.log("Data = " + JSON.stringify(results));
          res.json(results);
        });
        console.log("Body = " + JSON.stringify(req.body));
        console.log("Params = " + JSON.stringify(req.query));

    }


}
