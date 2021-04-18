const con = require('../functions/dbConnection.js');
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const {checkAvailibilty, alterflag} = require("../functions/functions");


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
	          res.render("driver" , {bookride: checkAvailibilty()});
	        }
	    });
  	}
}

exports.pending = async (req, res) => {
	try{
  var sql = "Select * from pendingrides limit 1";

  await con.query(sql, function (err, result)
  {
    if (err){
      throw err;
    }
    //Query result is array of RowDataPackets instead of array of objects
    //res.render("pending", {result: JSON.parse(JSON.stringify(result))});//converting it into an array of objects
		console.log(result);
		if(result.length === 0){
			res.status(200).render('driver', {flag:1});
		}
		else{
		res.status(200).render("driver",{
			flag:2,
			fname: result[0].fname,
			rollnumber: result[0].rollnumber,
			hostel: result[0].hostel,
			mobile: result[0].mobile
		});
	}

	});
}catch(error){
	console.log(error);
	res.sendStatus(500);
}
};
