var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator");
const {dlogin, slogin, alogin} = require("../controllers/home");


// var sql = process.env.SELECT;

router.get("/login", (req, res) => {  
  res.render("login");
})

router.post("/driver",dlogin);

router.post("/student",slogin);

router.post("/auth",alogin);

module.exports = router;