const con = require('../functions/dbConnection')
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const {checkBookride, alterflag, getPendingRides} = require("../functions/functions");
var result3 = [];

exports.dlogin = async (req,res) =>{
	try
	{
		if(req.cookies.role === undefined && req.cookies.username === undefined){
	    	res.redirect("/login")
	  	}else{
	  		var sql  = "select username from driver where username=?";
		    await con.query(sql, [req.cookies.username],async function (err, result2){
		        
		        try{
		        				if (err)
		        		        {  
		        		        	res.send(err);
		        		        }
		        	
		        		        if(result2.length === 0){
		        		          res.redirect("/login");
		        		        }else{
		        		        	// var result2;
		        		        	try{

										var sql = "Select * from pendingrides limit 1";
										await con.query(sql, function (err, result)
										{
										 	if (err){
										      console.log(error);
	  										  res.sendStatus(500);
										    }
										   	result3 = result;
										});
										}catch(error){
											console.log(error);
											res.sendStatus(500);
										}
		        						// console.log(result2);
		        		          		if(!checkBookride() && result3.length === 0){
		        								res.status(200).render("driver", {flag:1},{async: true});
		        							}else{
		        								res.status(200).render("driver",{flag:4},{async: true});
			        						}
		        					// res.status(200).render("driver", {flag:1});
		        		        }
		        		    }catch(error){
		        		    	console.log(error);
	  							res.sendStatus(500);
		        		    }

		    });
	  	}
	  }catch(error){
	  	console.log(error);
	  	res.sendStatus(500);
	  }
}

exports.pending = async (req, res) => {
	try{
		var ridePending = await getPendingRides();
  	if(ridePending.length === 0){
			res.status(200).render('driver', {flag:1},{async: true});
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
