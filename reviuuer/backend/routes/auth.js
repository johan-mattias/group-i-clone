var express = require('express');
var router = express.Router();
app = express();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;

var bcrypt = require('bcrypt');
const saltRounds = 10;

session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

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
        console.log('Authentication declined');
        cb(error, false);
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
            console.log('Not authenticated')
            res.json({access: false});
        } 
      });
    } else {
      console.log('Authentication failed')
      res.json({access: false});
    }
  });

module.exports = router;
