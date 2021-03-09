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

exports.login = (req,res) =>{
  res.render('login');
}

exports.confirmlogin = (req,res) =>{
//   console.log(req.body);

  var values = [req.body.email, req.body.password];
  var role = req.body.role;
  var sql = null;

  if(role === "authority"){
    sql = process.env.CHECKAUTH;
  }else if(role === "student"){
    sql = process.env.CHECKSTUDENT;
  }else{
    sql = process.env.CHECKDRIVER;
  }
  
  // console.log(sql);
  con.query(sql, values, function (err, result) {
      if (err)
        throw err;

      // console.log(values);
      // console.log(result.length);
      if(result.length === 0){
        // console.log("login");
        // msg = "Invalid Username/Password/Role";
        res.redirect("login");
        // flag = 1;
      }else{
        res.cookie('username', values[0]);
        res.cookie('role', role);

        // console.log("not zero");
        if(role === "authority"){
          res.redirect("auth");
        }else if(role === "student"){
          res.redirect("student");
        }else{
          res.redirect("driver");
        }
      }
  });

  // res.render('login');
}
