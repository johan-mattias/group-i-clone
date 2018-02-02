var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;
var bodyParser = require('body-parser');


const registerUser = (user, password, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'INSERT INTO user (username, password) VALUES (?, ?)',
      timeout: 40000, // 40s
      values: [user, password]
    }, function (error, results, fields) {
      connection.release();

      if(error) {
          console.error(error);
          cb(error, false);
      } else {
          console.log(results);
          cb(error, true);
      }
    });
  });
}

/* POST new user. */
router.post('/', function(req, res) {
    var username = req.param('username') ? req.param('username') : undefined;
    var password = req.param('password') ? req.param('password') : undefined;

    if(username !== undefined && password !== undefined) {
      registerUser(username, password, (error, added) => {
        if(added) {
            console.log('New user added')
            res.json({added: true});
        } 
      });
    } else {
      console.log('Invalid inputs')
      res.json({added: false});
    }
  });

module.exports = router;
