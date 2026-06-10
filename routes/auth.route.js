// require express
// router
// require conroller 
// init Methode request
// export
//_____________________________________________

const express = require("express")

const router = express.Router()

const loginController = require("../controllers/authUsers.controller")

router.post("/login",loginController)

module.exports = router