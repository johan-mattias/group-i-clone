var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var username = req.param('username');
    var password = req.param('password');
  
    if(username == 'admin' && password == '1234') {
        console.log('Authenticated')
        res.json({access: true});
    } else {
        console.log('Authentication failed')
        res.json({access: false});
    }
  });

module.exports = router;
