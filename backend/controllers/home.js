var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
var con = mysql.createConnection({
 
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 3306

});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");

});

exports.dlogin = (req,res) =>{
	var values = [req.body.email, req.body.password];
	var sql = process.env.CHECKDRIVER;
	var flag = 1;
	con.query(sql, values, function (err, result) {
  		if (err)
  			throw err;

  		if(result){
  			res.redirect("login");
  		}else{
  			res.render("driver");

  		}
	});
}

exports.slogin = (req,res) =>{
	var values = [req.body.email, req.body.password];
	var sql = process.env.CHECKSTUD;

	con.query(sql, values, function (err, result) {
  		if (err)
  			throw err;
  		console.log(result);
	});
	res.render("student");
}

exports.alogin = (req,res) =>{
	var values = [req.body.email, req.body.password];
	var sql = process.env.CHECKAUTH;

	con.query(sql, values, function (err, result) {
  		if (err)
  			throw err;
  		console.log(result);
	});
	res.render("auth");
}