const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { orderValidator } = require("../controllers/validation/orderValidation")
const { createOrder,getAllOrders,getOrderById } = require("../controllers/order.controller")

router.post("/create", valid(orderValidator), createOrder)   //createCategory
router.get("/", valid(orderValidator), getAllOrders)   //getAllCategories
router.get("/:id", valid(orderValidator), getOrderById)   //getAllCategories
module.exports = router