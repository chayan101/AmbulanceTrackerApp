var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
var available = require("../models/ambulance");



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
