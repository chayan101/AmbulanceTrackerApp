var express = require("express");
var router = express.Router();


router.get('/home', (req, res) => {
  res.render('homepage');
})

router.get('/driver', (req, res) => {
  res.render('driver');
})

router.get('/student', (req, res) => {
  res.render('student');
})

router.get('/auth', (req, res) => {
  res.render('auth');
})

module.exports = router;