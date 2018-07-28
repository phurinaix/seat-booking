const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'seat_booking'
});

con.connect(function(err) {
  if (err) throw err;
});

module.exports = con;