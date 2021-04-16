var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator");
const {auth,driver,registerAuth,registerDriver} = require("../controllers/admin");

router.get("/registerAuth",auth);
router.get("/registerDriver",driver);

router.post("/registerAuth",registerAuth);
router.post("/registerDriver",registerDriver);
module.exports = router;
