var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;

const authenticateUser = (user, password, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'SELECT * FROM user WHERE username = ? AND password = ?',
      timeout: 40000, // 40s
      values: [user, password]
    }, function (error, results, fields) {
      connection.release();

      if(error) console.error(error);
  
      if(results.length & password == results[0].password && user == results[0].username) {
        console.log('Authentication accepted');
        cb(error, true);
        return;
      } 
  
      console.log('Authentication declined');
      cb(error, false);
      return;
    });
  });
}

/* GET home page. */
router.get('/', function(req, res) {
    console.log(req.param('username'));
    console.log(req.param('password'));

    var username = req.param('username') ? req.param('username') : undefined;
    var password = req.param('password') ? req.param('password') : undefined;

    console.log(username);
    console.log(password);

    if(username !== undefined && password !== undefined) {
      authenticateUser(username, password, (error, access) => {
        if(access) {
            console.log('Authenticated')
            res.json({access: true});
        } 
      });
    } else {
      console.log('Authentication failed')
      res.json({access: false});
    }
  });

module.exports = router;
