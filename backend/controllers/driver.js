const con = require('../functions/dbConnection.js');
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const {checkBookride, alterflag, getPendingRides} = require("../functions/functions");


exports.dlogin = async (req,res) =>{
	if(req.cookies.role === undefined && req.cookies.username === undefined){
    	res.redirect("/login")
  	}else{
  		var sql  = "select username from driver where username=?";
	    await con.query(sql, [req.cookies.username],async function (err, result){
	        if (err)
	          throw err;

	        if(result.length === 0){
	          res.redirect("/login");
	        }else{
						var ridePending = await getPendingRides();
	          if(!checkBookride() && ridePending.length === 0 ){
							res.status(200).render("driver", {flag:1});
						}else{
							res.status(200).render("driver",{flag:4});
						}
	          // console.log(req.cookies.role === undefined);

	        }
	    });
  	}
}

exports.pending = async (req, res) => {
	try{
		var ridePending = await getPendingRides();
  	if(ridePending.length === 0){
			res.status(200).render('driver', {flag:1});
		}
		else{
		res.status(200).render("driver",{
			flag:2,
			fname: ridePending[0].fname,
			rollnumber: ridePending[0].rollnumber,
			hostel: ridePending[0].hostel,
			mobile: ridePending[0].mobile
		});
	}

	}catch(error){
	console.log(error);
	res.sendStatus(500);
}
};
