var express = require("express");
var router = express.Router();


router.get('/login', (req, res) => {
  res.render('login');
})

router.post('/driver', (req, res) => {
	// console.log(req);
  res.render('driver');
})

router.post('/student', (req, res) => {
  res.render('student');
})

router.post('/auth', (req, res) => {
  res.render('auth');
})

module.exports = router;