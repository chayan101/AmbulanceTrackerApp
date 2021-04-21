const con = require('../functions/dbConnection')
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const {checkBookride, alterFlag} = require("../functions/functions");

exports.pending = async (req, res) => {
	try{
		// var ridePending = await getPendingRides();
		var sql2 = "Select rollnumber from pendingrides limit 1";
		await con.query(sql2, async (err, result2)=>{
			
			if(result2.length == 0){
				res.render("driver",{flag: 1,fname: '0hello',
								rollnumber: '0hello',
								hostel: '0hello',
								mobile: '0hello'});
			}else
			{
				
				var sqlinsert = "insert into record(rollnumber, time, distance, driverid) values (" + result2[0].rollnumber + ",'" + new Date().getTime() + "'," + 10+ "," +2  + ");";
				
				await con.query(sqlinsert, (err, resultinsert)=>{
					if(err){
						throw err;
					}
				});

				var sql3 = "delete from pendingrides where rollnumber = "+ result2[0].rollnumber;
				await con.query(sql3, (err, result3)=>{
					if(err){
						throw error;
					}
					console.log("pending: " + alterFlag(false));
					res.redirect('/driver/');
				});
			}
		});

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
						 }
						else if(!checkBookride() && result2.length === 0){
							res.status(200).render("driver", {flag:1,
								fname: '0hello',
								rollnumber: '0hello',
								hostel: '0hello',
								mobile: '0hello'});
						}else if(!checkBookride() && result2.length != 0){
							res.status(200).render("driver",{flag:2,
								fname: result2[0].fname,
								rollnumber: result2[0].rollnumber,
								hostel: result2[0].hostel,
								mobile: result2[0].mobile});
						}
						else{
							res.status(200).render("driver",{flag:4,
								fname: '0hello',
								rollnumber: '0hello',
								hostel: '0hello',
								mobile: '0hello'});
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
