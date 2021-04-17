const con = require('../functions/dbConnection.js');
const {  validationResult } = require("express-validator");
const {hashPassword} = require("../functions/functions");


exports.registerAuth = async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send("invalid credentials!!!");
  }
  try{
    req.body.password = await hashPassword(req.body.password);
    var sql = "insert into authority(fname, lname, username,password) values('" + req.body.fname + "','" + req.body.lname +"','"
              +req.body.username+ "','" + req.body.password + "');" ;

    await con.query(sql, (err,result)=>{
        if(err){
          res.sendStatus(400);
        }else{
          res.status(200).send("successfully registered!");
      }
    });

  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }

};

exports.registerDriver = async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send("invalid credentials!!!");
  }
  try{
    req.body.password = await hashPassword(req.body.password);
    var sql = "insert into driver(fname, lname, username,password, mobile) values('" + req.body.fname + "','" + req.body.lname +"','"
              +req.body.username+ "','" + req.body.password + "'," + req.body.mobile + ");" ;

    await con.query(sql, (err,result)=>{
        if(err){
          res.sendStatus(400);
        }else{
          res.status(200).send("successfully registered!");
      }
    });

  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }

};
