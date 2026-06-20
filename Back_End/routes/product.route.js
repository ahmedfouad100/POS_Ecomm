const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { productValidator } = require("../controllers/validation/productValidation")
const { createProduct,getAllProducts,getProductById } = require("../controllers/product.controller")

router.post("/create", valid(productValidator), createProduct)   //createCategory
router.get("/", valid(productValidator), getAllProducts)   //getAllCategories
router.get("/:id", valid(productValidator), getProductById)   //getAllCategories
module.exports = router