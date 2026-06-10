// require express
// router
// require conroller 
// init Methode request
// export
//_____________________________________________

const express = require("express")

const router = express.Router()

const {loginController,registerController} = require("../controllers/authUsers.controller")

router.post("/login",loginController)
router.post("/register",registerController)
module.exports = router