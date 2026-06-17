const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { productValidator } = require("../controllers/validation/orderValidation")
// const { loginController, registerController } = require("../controllers/authUsers.controller")

router.post("/createproduct", valid(productValidator), productController)   //createCategory
router.get("/", valid(productValidator), productController)   //getAllCategories
router.get("/:id", valid(productValidator), productController)   //getAllCategories
module.exports = router