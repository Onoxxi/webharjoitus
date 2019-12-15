'use strict'

var mysql = require('mysql');
const querystring = require('querystring');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
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

    },

    rekisteroi: function(req, res){
      var data = req.params;

        var sql = 'INSERT INTO kayttajat (nimi, salasana) VALUES' +
        '("' + data.nimi + '", "' + data.salasana + '")'
        connection.query(sql, function(error, results, fields){
          console.log("Data = " + JSON.stringify(results));
          res.json(results);
        });
        console.log("Body = " + JSON.stringify(req.body));
        console.log("Params = " + JSON.stringify(req.query));

    },

    login: function(req, res){
      var data = req.params;

      var sql = 'SELECT kayttajaID FROM kayttajat WHERE nimi LIKE "' + data.nimi + '" AND salasana LIKE "' + data.salasana + '"'
      connection.query(sql, function(error, results, fields){
        if(results == ""){
          console.log("Väärä salasana")
          res.clearCookie("cookie_name");
        }else {
          console.log("lyöty");
          res.cookie(data.nimi, results[0].kayttajaID);
        }
        console.log("Data = " + JSON.stringify(results));
        res.json(results);
      });

      console.log("Body = " + JSON.stringify(req.body));
      console.log("Params = " + JSON.stringify(req.query));

    }


}
