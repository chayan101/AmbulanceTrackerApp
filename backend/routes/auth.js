var express = require("express");
var router = express.Router();
// const { check, validationResult} = require("express-validator");
const {alogin, register, datainsert, map, records, csv} = require("../controllers/auth");


// var sql = process.env.SELECT;

// router.get("/login", (req, res) => {
// 	console.log(req);
//   res.render("login");
// })

router.get("/",alogin);
router.get("/register",register);

router.post("/register",datainsert);
router.post("/csv",csv);

router.get("/map",map);
router.get("/records",records);

router.get("/logout",function(req,res){
	res.clearCookie('username');
	res.clearCookie('role');
	res.redirect("/login");
});
module.exports = router;
