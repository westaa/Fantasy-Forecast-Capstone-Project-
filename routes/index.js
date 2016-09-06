require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var jwtDecode = require('jwt-decode');
var token;
var errors;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/signup', function(req, res, next) {
  var password = bcrypt.hashSync(req.body.password, 8);
  knex('users')
  .where({
    username: req.body.username
  })
  .then(function(data) {
    if(data.length > 0) {
      res.json({errors: "This username is already in use. Please select another one."});
    }
    else {
      knex('users')
      .insert({
        username: req.body.username,
        password: password,
        email: req.body.email,
        is_admin: false
      }).returning("*")
      .then(function(user) {
        token = jwt.sign({ id: user[0].id, username: user[0].username, is_admin: user[0].is_admin}, process.env.SECRET);
        console.log(token);
        res.json({token:token});
        // res.redirect('/bikes');
      }).catch(function(err) {
        console.log(err);
      })
    }
  })
});

router.post('/api/signin', function(req, res, next) {
  console.log("POSTING");
  knex('users')
  .where({
    username: req.body.username
  })
  .first()
  .then(function(data) {
    if(!data) {
      res.json({errors: 'username or password is incorrect'})
    }
    else if(bcrypt.compareSync(req.body.password, data.password)) {
      token = jwt.sign({ id: data.id, username: data.username, is_admin: data.is_admin }, process.env.SECRET);
      res.json({token:token});
      console.log("token token: " + token);
      // res.redirect('/bikes');
    } else{
      console.log('username or password is incorrect');
      res.json({errors: 'username or password is incorrect'});
    }
  }).catch(function(err) {
    console.log(err);
    next(err)
  })
});


module.exports = router;
