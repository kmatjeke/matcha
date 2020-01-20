const express = require('express');
const server = express();

var connection = require('./config/db'),
    setup = require('./config/setup');

server.listen('3000', function(){
    console.log('Listening on port 3000');
});

