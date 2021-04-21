var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const {checkBookride, alterFlag} = require("../functions/functions");
const con = require('../functions/dbConnection')
var driverMob = "9521420803";

exports.slogin = (req,res) =>{
  if(req.cookies.role === undefined && req.cookies.username === undefined){
    	res.redirect("/login")
  	}else{
  		var sql  = "select rollnumber from student where rollnumber=?";
	    con.query(sql, [req.cookies.username], function (err, result){
	        if (err)
	          throw err;

	        if(result.length === 0){
	          res.redirect("/login");
	        }else{
	          // fname = req.body.fname;
           //  rollnumber = req.body.rollnumber;
           //  hostel = req.body.hostel;
	          // console.log(req.cookies.role === undefined);
	          res.render("student.ejs",{flag: 2, mobile: driverMob});//student home page;
	        }
	    });
  	}
}


exports.checkavail = (req,res) =>{
  res.render("student",{flag: checkBookride()?0:1, mobile: driverMob})
}
