var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator");
const {login, confirmlogin} = require("../controllers/login");


// var sql = process.env.SELECT;

// router.get("/", (req, res) => {
// 	console.log(req);  
//   res.render("login");
// })

router.get("/",login);

router.post("/",confirmlogin);

module.exports = router;