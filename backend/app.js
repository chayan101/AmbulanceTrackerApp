require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const app = express();


//connecting to the database
 var con = mysql.createConnection({

  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
database: process.env.DATABASE

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");

});




//adding middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//to access the json data in coming post request using req.body
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api", authRoutes);
//firing up the server

const port = 3000 || process.env.PORT;



app.listen(port, () => {
  console.log(`app listening on port:${port}`)
})
