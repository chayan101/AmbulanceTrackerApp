var mysql = require('mysql');
require('dotenv').config();

//for handling post request "con" object is required
var con = mysql.createConnection({

  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
database: process.env.DATABASE

});

//defining controllers and exporting them
exports.signout = (req, res) => {

  res.json({
    message:"user signed out!!!!!"
  });
};

exports.signup = (req, res) => {
  var sql = "INSERT INTO student(rollnumber, fname, lname, password, hostel) VALUES (" + req.body.rollnumber +",'" + req.body.fname + "','" + req.body.lname + "','" +  req.body.password + "','" + req.body.hostel + "')";
  con.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log("1 record inserted");
  });

  res.end();
};
