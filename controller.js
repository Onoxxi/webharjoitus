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
    rekisteroi: function(req, res){
      var data = req.params;

        var sql = 'INSERT INTO kayttajat (nimi, salasana) VALUES' +
        '("' + data.nimi + '", "' + data.salasana + '")'
        connection.query(sql, function(error, results, fields){
          if(results == null){
            console.log("Nimi on jo käytössä");
            res.jsonp({success:true});
          } else {
            console.log("Rekisteröinti onnistui");
            res.jsonp({success:false});
          }
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
        //  res.clearCookie("cookie_name");

        }else {
          console.log("lyöty");
          res.cookie(data.nimi, results[0].kayttajaID);
        }
        console.log("Data = " + JSON.stringify(results));
        res.json(results);
      });
      console.log("Body = " + JSON.stringify(req.body));
      console.log("Params = " + JSON.stringify(req.query));

    },

    muokkaus: function(req, res){
      var x = req.headers.cookie;
      var b = x.split('=');
      var data = req.params;
      var sql = 'UPDATE kayttajat SET salasana = "' + data.us + '" WHERE nimi LIKE "' + b[0] + '" AND salasana LIKE "' + data.vs + '"'
      connection.query(sql, function(error, results, fields){
        if(results.affectedRows == 0){
          console.log("Vanha salasana väärin");
          console.log(b[0] + "eka " + b[1]);
          res.jsonp({success:true});
        } else {
          console.log("Salasana vaihdettu");
          res.jsonp({success:false});
        }

      });
      console.log("Body = " + JSON.stringify(req.body));
      console.log("Params = " + JSON.stringify(req.query));
    },

    huoneHaku: function(req, res){
      connection.query("SELECT huoneNimi FROM huoneet", function(error, results, fields){
        console.log("Data = " + JSON.stringify(results));
        results.forEach(element =>{
          if(global.rooms.includes(element.huoneNimi)){

          }else {
            global.rooms = global.rooms + "," + element.huoneNimi ;
          }
        });

        res.json(results);
      });
      console.log("Body = " + JSON.stringify(req.body));
      console.log("Params = " + JSON.stringify(req.query));
    },

    huoneenLuonti: function(req,res){
      var data = req.params;
      var sql = 'INSERT INTO huoneet (huoneNimi) VALUES ("' + data.huonNimi + '")';
      connection.query(sql, function(error,results,fields){
        if(results == null){
          console.log("Huone on jo olemassa");
          res.jsonp({success:true});
        } else {
          console.log("Huone luotu");
          res.jsonp({success:false});
        }
      });
    }


}
