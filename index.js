const express = require('express');
const server = express();
const bcrypt = require('bcrypt');
const users = [];
//var connection = require('./config/db'),
  //  setup = require('./config/setup');

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
    server.set('view-engine', 'ejs')
    server.use(express.urlencoded({ extended: false}))
    server.get('/', (req, res) => {
      res.render("index.ejs", { name: 'Koketso'});
    })

    server.get('/login', (req, res) => {
      res.render("login.ejs");
    })

    server.get('/register', (req, res) => {
      res.render("register.ejs");
    })

    server.post('/register', async (req, res) => {
      try {
          const hashedPassword = await bcrypt.hash(req.body.password, 10)
          users.push({
            id: Date.now().toString,
            username: req.body.username,
            firstname: req.body.fname,
            surname: req.body.sname,
            email: req.body.email,
            password: hashedPassword
          })
          res.redirect('/login');
      } catch {
          res.redirect('/register');
      }
      console.log(users);
    });

    server.post('/login', (req, res) => {
      
    });



    server.listen('2000', function(){
    console.log('Listening on port http://localhost:8000');
});

