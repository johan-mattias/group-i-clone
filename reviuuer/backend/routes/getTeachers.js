var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;

const fetchTeachers = (cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'SELECT * FROM teacher',
      timeout: 40000, // 40s
      values: []
    }, function (error, results, fields) {
      connection.release();

      if(error) console.error(error);
      
      cb(error, results);
      console.log(results);
      return;
    });
  });
}

/* GET teachers. */
router.get('/', function(req, res) {
  fetchReviewsAll((error, reviews) => {
      res.json(reviews);
    })
});

module.exports = router;