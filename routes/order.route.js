const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { orderValidator } = require("../controllers/validation/orderValidation")
// const { loginController, registerController } = require("../controllers/authUsers.controller")

router.post("/createorder", valid(orderValidator), orderController)   //createCategory
router.get("/", valid(orderValidator), orderController)   //getAllCategories
router.get("/:id", valid(orderValidator), orderController)   //getAllCategories
module.exports = router