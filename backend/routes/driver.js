var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator");
const {dlogin} = require("../controllers/driver");


// var sql = process.env.SELECT;

// router.get("/login", (req, res) => {
// 	console.log(req);  
//   res.render("login");
// })

router.get("/",dlogin);

router.get("/logout",function(req,res){
	// req.cookies.username = null;
	// req.cookies.role = null;

	res.clearCookie('username');
	res.clearCookie('role');
	res.redirect("/login");
});

module.exports = router;