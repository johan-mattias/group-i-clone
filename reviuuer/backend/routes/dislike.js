var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;
var bodyParser = require('body-parser');


const dislikeComment = (user_id, comment_id, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'INSERT INTO likeAndDislike (user_id, review_id, comment_id, like_type) VALUES (?, NULL, ?, \'dislike\')',
      timeout: 40000, // 40s
      values: [user_id, comment_id]
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

const dislikeReview = (user_id, review_id, cb) => {
    mysqlConf.getConnection(function (err, connection) {
      connection.query({
        sql: 'INSERT INTO likeAndDislike (user_id, review_id, comment_id, like_type) VALUES (?, ?, NULL, \'dislike\')',
        timeout: 40000, // 40s
        values: [user_id, review_id]
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

/* POST new dislike. */
router.post('/', function(req, res) {
    var user_id = req.param('user_id') ? req.param('user_id') : undefined;
    var review_id = req.param('review_id') ? req.param('review_id') : undefined;
    var comment_id = req.param('comment_id') ? req.param('comment_id') : undefined;

    if(user_id !== undefined && review_id !== undefined && comment_id === undefined) {            
        dislikeReview(user_id, review_id, (error, added) => {
            if(added) {
                console.log('Review with id ' + review_id + ' disliked')
                res.json({added: true});
            } 
        });
    } else if(user_id !== undefined && review_id === undefined && comment_id !== undefined) {
        dislikeComment(user_id, comment_id, (error, added) => {
            if(added) {
                console.log('Comment with id ' + comment_id + ' disliked')
                res.json({added: true});
            } 
          });
    } else {
      console.log('Invalid inputs')
      res.json({added: false});
    }
  });

module.exports = router;
