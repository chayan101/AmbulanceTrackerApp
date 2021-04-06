var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
var avail = require("../models/ambulance");
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
	// console.log(avail);
	if(req.cookies.role === undefined && req.cookies.username === undefined){
    	res.redirect("/login")
  	}else{
  		var sql  = process.env.USERDRIVER;
	    con.query(sql, [req.cookies.username], function (err, result){
	        if (err)
	          throw err;

	        if(result.length === 0){
	          res.redirect("/login");
	        }else{
	          // console.log("hello");
	          // console.log(req.cookies.role === undefined);
	          res.render("driver",{value: avail});
	        }
	    });
  	}
}

exports.check = (req,res) =>{
	// console.log("yoooo");
	res.json({message: avail});
}

exports.pending = (req,res) =>{
	res.render("pending");
}