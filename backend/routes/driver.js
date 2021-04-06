var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator")
const {dlogin, pending} = require("../controllers/driver")

router.get("/",dlogin);

router.get("/logout",function(req,res){
	// req.cookies.username = null;
	// req.cookies.role = null;

	res.clearCookie('username');
	res.clearCookie('role');
	res.redirect("/login");
});

router.get("/pending", pending);

module.exports = router;