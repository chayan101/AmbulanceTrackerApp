const con = require('../functions/dbConnection.js');
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const {hashPassword} = require("../functions/functions");


exports.alogin = async (req,res) =>{
  try
  {
      if(req.cookies.role === undefined && req.cookies.username === undefined){
      res.redirect("/login")
    }else{
      if(req.cookies.role === "authority"){
      var sql  = "select username from authority where username=?";
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
  catch(error)
  {
    console.log(error);
    res.sendStatus(500);
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

exports.datainsert = async (req,res) =>{
	try{
  req.body.password =  await hashPassword(req.body.password);
   var sql = "INSERT INTO student(rollnumber, fname, lname, hostel, password) VALUES (" + req.body.rollno +",'" + req.body.fname + "','" + req.body.lname + "','" +  req.body.hostel + "','" + req.body.password + "')";
    // console.log(sql);
     await con.query(sql, function (err, result, fields)
    {
      if (err){
				res.render("register",{message:"Invalid credentials"});
      }
      res.render("register", {message:"Student registered successfully"});
    });

	}catch(error){
		res.status(500).send(error);
	}

}

exports.csv = async (req,res) =>{
	try{
    var data = Object.keys(req.body).map((key) => [Number(key), req.body[key]]);
	// var sql = "INSERT INTO student(rollnumber, fname, lname, password, hostel) VALUES (" + req.body.rollno +",'" + req.body.fname + "','" + req.body.lname + "','" +  req.body.password + "','" + req.body.hostel + "')";

    var sql = "INSERT INTO student(rollnumber, fname, lname, hostel, password) VALUES (?)"
    var length  = data.length;
    var array = [];
    console.log(data)
    for(var i=1;i<length;i++){
      array[i-1] = (data[i][1]);
    }

  	// await con.query(sql, array, function (err, result, fields)
  	// {
  	// 	if (err){
  	// 		throw err;
  	// 	}
  	// 	res.render("register");
  	// });

	}catch(error){
		res.status(500).send(error);
	}

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
