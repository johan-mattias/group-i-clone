var mysql = require('mysql');
var config = {
    mysql_pool : mysql.createPool({
        host: 'localhost',
        port: '8889',
        user: 'root',
        password: 'root',
        database: 'reviuuer'
    })
};

module.exports = config;