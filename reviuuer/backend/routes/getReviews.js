var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;

const fetchReviewsAll = (cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'SELECT * FROM review',
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

const fetchReviewsSpecific = (id, type, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'SELECT * FROM review WHERE ' + type + ' = ?',
      timeout: 40000, // 40s
      values: [id]
    }, function (error, results, fields) {
      connection.release();

      if(error) console.error(error);
      
      cb(error, results);
      console.log(results);
      return;
    });
  });
}





/* GET reviews. */
router.get('/', function(req, res) {
  var review_id = req.param('review_id');
  var course_id = req.param('course_id');
  var teacher_id = req.param('teacher_id');

  if(course_id === undefined && teacher_id === undefined && review_id === undefined) {
    fetchReviewsAll((error, reviews) => {
        res.json(reviews);
      })
  } else if (course_id !== undefined && teacher_id === undefined && review_id === undefined) {
    fetchReviewsSpecific(course_id, 'course_id', (error, reviews) => {
      res.json(reviews);
    })
  } else if (course_id === undefined && teacher_id !== undefined && review_id === undefined) {
    fetchReviewsSpecific(teacher_id, 'teacher_id', (error, reviews) => {
      res.json(reviews);
    })
  } else if (course_id === undefined && teacher_id === undefined && review_id !== undefined) {
    fetchReviewsSpecific(review_id, 'id', (error, reviews) => {
      res.json(reviews);
    })
  }

});

module.exports = router;