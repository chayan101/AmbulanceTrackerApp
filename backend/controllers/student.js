var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
var available = require("../models/ambulance");
const con = require('../functions/dbConnection.js');

exports.slogin = (req,res) =>{
  if(req.cookies.role === undefined && req.cookies.username === undefined){
    	res.redirect("/login")
  	}else{
  		var sql  = process.env.USERSTUDENT;
	    con.query(sql, [req.cookies.username], function (err, result){
	        if (err)
	          throw err;

	        if(result.length === 0){
	          res.redirect("/login");
	        }else{
	          fname = req.body.fname;
            rollnumber = req.body.rollnumber;
            hostel = req.body.hostel;
	          // console.log(req.cookies.role === undefined);
	          res.render("student.ejs");//student home page;
	        }
	    });
  	}
}
exports.bookAmbulance = (req,res) => {
  //res.send(student);

  if(available === true){
    res.render("bookavail.ejs");//ambulance available
  }else{
    res.render("booklater.ejs");//not availabe
  }
}

exports.bookForLater = (req, res) => {
  console.log(req.body);
  var sql = "INSERT INTO pendingRides VALUES("+req.body.rollnumber+ ",' "+req.body.fname+"','" +req.body.hostel+"');";
  con.query(sql,  function (err, result){
      if (err)
        throw err;

      res.render("booksuccess.ejs");//succesfully booked for later page
  });
}
