const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { couponValidator } = require("../controllers/validation/couponValidation")
const { createCoupon,getAllCoupons,getCouponById } = require("../controllers/coupon.controller")

router.post("/create", valid(couponValidator), createCoupon)   //createCategory
router.get("/", valid(couponValidator), getAllCoupons)   //getAllCategories
router.get("/:id", valid(couponValidator), getCouponById)   //getAllCategories
module.exports = router