var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator");
const {alogin, register, datainsert,map,records} = require("../controllers/auth");

router.post("/registerAuth",registerAuth);
router.post("/registerDriver",registerDriver);
module.exports = router;
