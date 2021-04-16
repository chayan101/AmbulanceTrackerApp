var express = require("express");
var router = express.Router();
const { body, validationResult} = require("express-validator");
const {registerAuth, registerDriver} = require("../controllers/admin");

router.post("/registerAuth",
              body('fname').isLength({ min: 2 }),
              body('lname').isLength({ min: 2 }),
              body('username').isLength({ min: 2 }),
              body('password').isLength({ min: 2 }),
          registerAuth);
router.post("/registerDriver",
                        body('fname').isLength({ min: 2 }),
                        body('lname').isLength({ min: 2 }),
                        body('username').isLength({ min: 2 }),
                        body('password').isLength({ min: 2 }),
                    registerDriver);
module.exports = router;
