const con = require('../functions/dbConnection.js');
var mysql = require('mysql');
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const {checkBookride} = require("../functions/functions");

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
          try{
        if(result.length === 0){
          res.redirect("login");
        }else{

          const match = await bcrypt.compare(req.body.password, result[0].password);
          // console.log(match)
          if(match){
            res.cookie('username', values[0]);
            res.cookie('role', role);
            if(role === "authority"){
              res.redirect("auth");
            }else if(role === "student"){
              var driverMob = "9521420803";
  	          res.redirect("/student");
            }else if (role === "driver") {
              // console.log(1);
              var sql2 = "Select * from pendingrides limit 1";
              try{
              await con.query(sql2, (err, result2)=>{
                // console.log(2);
                if(err){
                   console.log(err);
                   res.sendStatus(500);
                 }
                else if(!checkBookride() && result2.length === 0){
                  // console.log(3);
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
                  // console.log(4);
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
            }else{
              res.redirect("/admin/registerAuth");
            }
          }else{
            res.redirect("login");
          }
        }
      }catch(error){
        console.log(error);
        res.sendStatus(500);
      }
    });
  }catch(error)
  {
    console.log(error);
    res.sendStatus(500);
  }
  // res.render('login');
}
