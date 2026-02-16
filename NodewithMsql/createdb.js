let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE sdg", function (err, result) {
    if (err) throw err;
    console.log("Database created" , result);
  });
});


