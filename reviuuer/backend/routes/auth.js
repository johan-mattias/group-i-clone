var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;

const authenticateUser = (email, password, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'SELECT * FROM user WHERE email = ? AND password = ?',
      timeout: 40000, // 40s
      values: [email, password]
    }, function (error, results, fields) {
      connection.release();

      if(error) console.error(error);
  
      if(results.length && password == results[0].password && email == results[0].email) {
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
    var email = req.param('email') ? req.param('email') : undefined;
    var password = req.param('password') ? req.param('password') : undefined;

    if(email !== undefined && password !== undefined) {
      authenticateUser(email, password, (error, access) => {
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
