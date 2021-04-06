var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
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

exports.alogin = (req,res) =>{
	if(req.cookies.role === undefined && req.cookies.username === undefined){
    	res.redirect("/login")
  	}else{
      if(req.cookies.role === "authority"){
  		var sql  = process.env.USERAUTH;
	    con.query(sql, [req.cookies.username], function (err, result){
	        if (err)
	          throw err;

	        if(result.length === 0){
	          res.redirect("/login");
	        }else{
	          console.log("hello");
	          // console.log(req.cookies.role === undefined);
	          res.render("auth");
	        }
	    });
      }else{
        res.redirect("/login");
      }
  	}
}

exports.register = (req,res) =>{
  if(req.cookies.role === undefined && req.cookies.username === undefined){
      res.redirect("/login")
    }else{
      if(req.cookies.role === "authority"){
        res.render("register");
      }else{
        res.redirect("/login");
      } 
    }
	
}

exports.datainsert = (req,res) =>{
	// var sql = "INSERT INTO student(rollnumber, fname, lname, password, hostel) VALUES (" + req.body.rollno +",'" + req.body.fname + "','" + req.body.lname + "','" +  req.body.password + "','" + req.body.hostel + "')";
 //  	con.query(sql, function (err, result, fields)
 //  	{
 //  		if (err){
 //  			throw err;
 //  		}
  		// console.log("1 record inserted");
  		res.render("register");
  	// });

  	// res.render('auth');
}

exports.map = (req,res)=>{
  if(req.cookies.role === undefined && req.cookies.username === undefined){
      res.redirect("/login")
    }else{
      if(req.cookies.role === "authority"){
        res.render("map");
      }else{
        res.redirect("/login");
      } 
    }
  }

exports.records = (req,res)=>{
  if(req.cookies.role === undefined && req.cookies.username === undefined){
      res.redirect("/login")
    }else{
      if(req.cookies.role === "authority"){
        var sql = "Select * from record";

        con.query(sql, function (err, result, fields)
        {
          if (err){
            throw err;
          }
          //Query result is array of RowDataPackets instead of array of objects
          res.render("records", {result: JSON.parse(JSON.stringify(result))});//converting it into an array of objects

        });
      }else{
        res.redirect("/login");
      } 
  }
}
