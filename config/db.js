const mysql = require('mysql');
const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'user',
    password    : '123456',
    database    : 'matcha'
});

connection.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log('database connected');
    }
});
module.exports = connection;