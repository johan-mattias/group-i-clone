var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;
var bodyParser = require('body-parser');

var bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = (email, password, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'INSERT INTO user (email, password) VALUES (?, ?)',
      timeout: 40000, // 40s
      values: [email, password]
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
    var email = req.param('email') ? req.param('email') : undefined;
    var myPlaintextPassword = req.param('password') ? req.param('password') : undefined;

    if(email !== undefined && myPlaintextPassword !== undefined) {
      bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        registerUser(email, hash, (error, added) => {
          if(added) {
              console.log('New user added')
              res.json({added: true,
                        token: true}); //TODO set the real cookie 
          } 
        });
      }); 
    } else {
      console.log('Invalid inputs')
      res.json({added: false});
    }
  });

module.exports = router;
