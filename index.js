const express = require('express');
const server = express();

var connection = require('./config/db'),
    setup = require('./config/setup');

// server.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
//     connection.query(sql, (err, result) => {
//        if (err) {
//            throw err;
//        }
//        else{
//            console.log(result);
//            res.send('Posts table created...');
//        }
//     });
// });

    server.listen('3000', function(){
    console.log('Listening on port 3000');
});

