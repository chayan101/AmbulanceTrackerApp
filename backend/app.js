require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const homeRoutes = require('./routes/home');
var bodyParser = require("body-parser");
var urlencodedparser = bodyParser.urlencoded({extended: false});
const app = express();

const port = 3000 || process.env.PORT;


// using static files and other stuffs
app.use('/public', express.static('public'));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
// using routes

app.use("/", homeRoutes);

//firing up the server
app.listen(port, () => {
  console.log('app listening on port: ' + port)
})

var select = process.env.SELECT;


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
