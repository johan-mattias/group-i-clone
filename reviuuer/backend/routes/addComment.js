var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlConf = require('../config.js').mysql_pool;
var bodyParser = require('body-parser');


const addComment = (user_id, review_id, comment_text, cb) => {
  mysqlConf.getConnection(function (err, connection) {
    connection.query({
      sql: 'INSERT INTO comment (user_id, review_id, comment_text) VALUES (?, ?, ?)',
      timeout: 40000, // 40s
      values: [user_id, review_id, comment_text]
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

/* POST new comment. */
router.post('/', function(req, res) {
    var user_id = req.param('user_id') ? req.param('user_id') : undefined;
    var review_id = req.param('review_id') ? req.param('review_id') : undefined;
    var comment_text = req.param('comment_text') ? req.param('comment_text') : undefined;

    if(user_id !== undefined && review_id !== undefined && comment_text !== undefined) {
      addComment(user_id, review_id, comment_text, (error, added) => {
        if(added) {
            console.log('New comment added')
            res.json({added: true});
        }
      });
    } else {
      console.log('Invalid inputs')
      res.json({added: false});
    }
  });

module.exports = router;
