const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { couponValidator } = require("../controllers/validation/couponValidation")
// const { loginController, registerController } = require("../controllers/authUsers.controller")

router.post("/createcoupon", valid(couponValidator), couponController)   //createCategory
router.get("/", valid(couponValidator), couponController)   //getAllCategories
router.get("/:id", valid(couponValidator), couponController)   //getAllCategories
module.exports = router