var express = require("express");
var router = express.Router();
<<<<<<< HEAD
const { body, validationResult} = require("express-validator");
const {registerAuth, registerDriver} = require("../controllers/admin");
=======
const { check, validationResult} = require("express-validator");
const {auth,driver,registerAuth,registerDriver} = require("../controllers/admin");

router.get("/registerAuth",auth);
router.get("/registerDriver",driver);
>>>>>>> 8ff32a21bd1a6cb30ce07eb1524d1c67cd08dd19

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
