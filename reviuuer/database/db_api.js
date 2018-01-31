const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'reviuuer'
});

connection.connect((error) => {
  if(error) console.error(error);
  console.log('Connected!');
});


const getReviews = () => {
  connection.query({
    sql: 'SELECT * FROM review',
    timeout: 40000, // 40s
  }, function (error, results, fields) {
    if(error) console.error(error);
  
    if(results.length) {
      console.log(results);
      return results;
    }
  });
}


const authenticateUser = (user, password) => {
  connection.query({
    sql: 'SELECT * FROM user WHERE username = ? AND password = ?',
    timeout: 40000, // 40s
    values: [user, password]
  }, function (error, results, fields) {
    if(error) console.error(error);

    if(results.length & password == results[0].password && user == results[0].username) {
      console.log('Authentication accepted');
      return true;
    } 

    console.log('Authentication declined');
    return false;
  });
}

connection.end()