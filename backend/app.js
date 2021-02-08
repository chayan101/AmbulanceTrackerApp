require('dotenv').config();
const express = require('express');
const mysql = require('mysql');



//firing up the server
const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port:${port}`)
})

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
