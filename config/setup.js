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
connection.query('CREATE TABLE IF NOT EXISTS users(id INT(11) AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, Firstname VARCHAR(255) NOT NULL, Lastname VARCHAR(255) NOT NULL, Email VARCHAR(255) NOT NULL, Password VARCHAR(255) NOT NULL, Orientation VARCHAR(25), Age INT(9), City VARCHAR(255), Bio VARCHAR(1000), Hobbies VARCHAR(500), PRIMARY KEY (id))');
console.log('table users created');
connection.query('CREATE TABLE IF NOT EXISTS user_interests(id INT(11) AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, Orientation VARCHAR(25), Age_min INT(9), Age_max VARCHAR(25), City VARCHAR(255), Hobbies VARCHAR(500), PRIMARY KEY (id))');
console.log('table user_interests created');
connection.end();
