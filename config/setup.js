const mysql = require('mysql');
const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'user',
    password    : '123456',
    database    : 'matcha'
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS matcha');
console.log('Database Created');
connection.end();
