const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'reviuuer'
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// app.get('/api/user', (req, res) => {
//   connection.query('SELECT * FROM user WHERE username = admin'), function (err, rows, fields) {
//   if (err) throw err
//   res.send({ express: 'TRUE' });
//   }
// });

app.listen(port, () => console.log(`Listening on port ${port}`));