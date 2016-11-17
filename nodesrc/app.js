var express    = require("express");
var mysql      = require('mysql');
var http       = require('http');
var connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASS,
  database : process.env.MYSQL_DATABASE
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
connection.query('SELECT table_schema, table_name FROM INFORMATION_SCHEMA.tables', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
//      var server = http.createServer(function (request, response) {
//        response.writeHead(200, {"Content-Type": "text/plain"});
//        response.end(rows);
//      });

  else
    console.log('Error while performing Query.');
//      var server = http.createServer(function (request, response) {
//       response.writeHead(200, {"Content-Type": "text/plain"});
//        response.end('Error while performing Query.');
//      });

  });
});

app.listen(3000);

//http.createServer(app).listen(process.env.PORT || 3000, function() {
//  console.log('Listening on port ' + (process.env.PORT || 3000));
//});
