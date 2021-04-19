const con = require('../functions/dbConnection')
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const {checkBookride, alterflag, getPendingRides} = require("../functions/functions");


// exports.dlogin = async (req,res) =>{
// 	try
// 	{
// 		if(req.cookies.role === undefined && req.cookies.username === undefined){
// 	    	res.redirect("/login")
// 	  	}else{
// 	  		var sql  = "select username from driver where username=?";
// 		    await con.query(sql, [req.cookies.username],async function (err, result){
// 		        				if (err)
// 		        		        {
// 													console.log(err);
// 		        		        	res.send(err);
// 		        		        }
//
// 		        		        if(result.length === 0){
// 		        		          res.redirect("/login");
// 		        		        }else{
//
// 										var sql2 = "Select * from pendingrides limit 1";
// 										await con.query(sql2, function (err, result2)
// 										{
// 										 	if (err){
// 										      console.log(error);
// 	  										  res.sendStatus(500);
// 										    }
// 										   	if(!checkBookride() && result2.length === 0){
// 		        								res.status(200).render("driver", {flag:1},{async: true});
// 		        							}else{
// 		        								res.status(200).render("driver",{flag:4},{async: true});
// 			        						}
// 										});
// 										}catch(error){
// 											console.log(error);
// 											res.sendStatus(500);
// 										}
// 		        						// console.log(result2);
//
// 		        					// res.status(200).render("driver", {flag:1});
// 		        		        }
// 		        		    }catch(error){
// 		        		    	console.log(error);
// 	  							res.sendStatus(500);
// 		        		    }
//
// 		    });
// 	  	}
// 	  }catch(error){
// 	  	console.log(error);
// 	  	res.sendStatus(500);
// 	  }
// }

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

exports.dlogin = async(req,res)=>{
	if(req.cookies.role === undefined && req.cookies.username === undefined){
			res.redirect("/login")
	}else{
		try{
			var sql  = "select username from driver where username=?";
			await con.query(sql,[req.cookies.username], async (err,result)=>{
				if(err){
							console.log(err);
							res.send(err);
				}else if(result.length === 0){
					//invalid username
					res.redirect("/login");
				}else{
					var sql2 = "Select * from pendingrides limit 1";
					try{
					await con.query(sql2, (err, result2)=>{
						if(err){
							 console.log(err);
							 res.sendStatus(500);
						}else if(!checkBookride() && result2.length === 0){
							res.status(200).render("driver", {flag:1},{async: true});
						}else{
							res.status(200).render("driver",{flag:4},{async: true});
						}
					});
				}catch(error){
					console.log(error);
					res.sendStatus(500);
				}
				}
			});
		}catch(error){
			console.log(error);
			res.sendStatus(500);
		}
	}

};
