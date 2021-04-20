require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cookie_parser = require("cookie-parser");
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const driverRoutes = require('./routes/driver');
const loginRoutes = require('./routes/login');
const adminRoutes = require("./routes/admin");
const {alterFlag} = require("./functions/functions");
var socket = require("socket.io");


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
app.use("/admin",adminRoutes);


//firing up the server
var server = app.listen(port, () => {
  console.log('app listening on port: ' + port)
})



//socket.io

var io = socket(server);

//here socket = the particular socket established between client and server
io.on('connection' , function(socket){
  console.log(`connection established between server and client @ ${socket.id}`);

  socket.on('setflag', function(data){
      var flag = alterFlag(data);
    // console.log(data);
    // //io.sockets refers to all the sockets connected to the server
    // io.sockets.emit('chat', data);
    // io.sockets.emit('clear');
  });

  //when student books a ride
  socket.on("book", ()=>{
      var flag = alterFlag(true);
      socket.broadcast.emit("book");
  });

  // socket.on('typing' , (data)=>{
  //   //socket is the socket connected at the moment && broadcast means sending msg to every other socket
  //   socket.broadcast.emit('typing', data);
  // });
});




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
