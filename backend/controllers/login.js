const con = require('../functions/dbConnection.js');
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.login = (req,res) =>{
  res.render('login');
}

exports.confirmlogin = async (req,res) =>{
  //console.log(req.body);
  try{
    var values = [req.body.email];
    var role = req.body.role;
    var sql = null;

    if(role === "authority"){
      sql = "select username, password from authority where username=?";
    }else if(role === "student"){
      sql = "select rollnumber, password from student where rollnumber=?";
    }else if(role === "driver"){
      sql = "select username, password from driver where username=?";
    }else{
      sql = "select username, password from admin where username=?"
    }

    // console.log(sql);
    await con.query(sql, values, async function (err, result) {
        if (err)
          throw err;
        if(result.length === 0){
          res.redirect("login");
        }else{

          const match = await bcrypt.compare(req.body.password, result[0].password);
          console.log(match)
          if(match){
            res.cookie('username', values[0]);
            res.cookie('role', role);
            if(role === "authority"){
              res.redirect("auth");
            }else if(role === "student"){
              res.redirect("student");
            }else if (role === "driver") {
              res.redirect("driver");
            }else{
              res.redirect("/admin/registerAuth");
            }
          }else{
            res.redirect("login");
          }
        }
    });
  }catch(error)
  {
    console.log(error);
    res.sendStatus(500);
  }
  // res.render('login');
}
