const express = require('express');
const hbs = require('hbs');
const con = require('./db');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.get('/booking', (req, res) => {
  res.render('booking.hbs');
});

app.post('/booking', (req, res) => {
  var input = JSON.parse(JSON.stringify(req.body));
  var sql = `INSERT INTO book (n_seat) VALUES (${parseInt(input.number)})`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.redirect('/booking');
  });
});

app.get('/api/book', (req, res) => {
  var sql = "SELECT n_seat FROM book";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

app.listen(8080, () => {
  console.log('Starting Server');
});