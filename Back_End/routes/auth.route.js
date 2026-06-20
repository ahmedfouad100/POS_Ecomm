// require express
// router
// require conroller 
// init Methode request
// export
//_____________________________________________

const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { loginValidator, registerValidator } = require("../controllers/validation/authUsersValidation")
const { loginController, registerController } = require("../controllers/authUsers.controller")

router.post("/login", valid(loginValidator), loginController)
router.post("/register", valid(registerValidator), registerController)
module.exports = router