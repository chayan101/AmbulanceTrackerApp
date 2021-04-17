const con = require('../functions/dbConnection.js');
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
var bookride = require("../models/bookride")


exports.dlogin = (req,res) =>{
	if(req.cookies.role === undefined && req.cookies.username === undefined){
    	res.redirect("/login")
  	}else{
  		var sql  = "select username from driver where username=?";
	    con.query(sql, [req.cookies.username], function (err, result){
	        if (err)
	          throw err;

	        if(result.length === 0){
	          res.redirect("/login");
	        }else{
	          console.log("hello");
	          // console.log(req.cookies.role === undefined);
	          res.render("driver" , {bookride: bookride});
	        }
	    });
  	}
}

exports.pending = (req, res) => {
  var sql = "Select * from pendingrides";

  con.query(sql, function (err, result, fields)
  {
    if (err){
      throw err;
    }
    //Query result is array of RowDataPackets instead of array of objects
    res.render("pending", {result: JSON.parse(JSON.stringify(result))});//converting it into an array of objects

  });
}

function refreshTable(available){
	if(available == true){
		fetch("http://localhost:3000/driver")
}
}
