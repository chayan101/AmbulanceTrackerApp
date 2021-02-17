var express = require('express');
var router = express.Router();

//requiring respective methods
const {signout, signup} = require('../controllers/auth.js')


router.get("/signout", signout);
router.post("/signup", signup);

module.exports = router;
