require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cookie_parser = require("cookie-parser");
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const driverRoutes = require('./routes/driver');
const loginRoutes = require('./routes/login');

var bodyParser = require("body-parser");
var urlencodedparser = bodyParser.urlencoded({extended: false});
const app = express();

const port = process.env.PORT;


// using static files and other stuffs
app.use('/public', express.static('public'));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookie_parser());

// using routes
app.use("/auth", authRoutes);
app.use("/student", studentRoutes);
app.use("/driver", driverRoutes);
app.use("/login", loginRoutes);


//firing up the server
app.listen(port,"0.0.0.0", () => {
  console.log('app listening on port: ' + port)
})








// var select = process.env.SELECT;


//connecting to the database
// var con = mysql.createConnection({
//  
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   port: 3306

// });


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to database!");

// });



// con.query(select, function (err, result) {  
// 	if (err) throw err;  
// 	console.log(result);  
// });  
