var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;

var bcrypt = require('bcrypt');
const saltRounds = 10;

const authenticateUser = (email, myPlaintextPassword, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'SELECT * FROM user WHERE email = ?',
      timeout: 40000, // 40s
      values: [email]
    }, function (error, results, fields) {
      connection.release();

      if(error) console.error(error);
  
      var bcryptAuth = bcrypt.compareSync(myPlaintextPassword, results[0].password);
      if(bcryptAuth) {
        console.log('Authentication accepted');
        cb(error, true);
        return;
      } 
      else{
        console.log('Authentication declined'); //TODO BUG den retunerar aldrig false till frontend
        cb(error, false); // TODO oklart om den retunerar någon gång 
        return;
      }
    });
  });
}

/* GET home page. */
router.get('/', function(req, res) {
    var email = req.param('email') ? req.param('email') : undefined;
    var password = req.param('password') ? req.param('password') : undefined;

    if(email !== undefined && password !== undefined) {
      authenticateUser(email, password, (error, access) => {
        if (access) {
            console.log('Authenticated')
            res.json({access: true});
        } else {
            console.log('Not authenticated') // TODO Printas aldrig 
            res.json({access: false}); // TODO oklart om den retuneras 
        } 
      });
    } else {
      console.log('Authentication failed')
      res.json({access: false});
    }
  });

module.exports = router;
