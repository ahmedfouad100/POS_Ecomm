const express = require("express")

const router = express.Router()
const valid = require("../middlewares/validation.middleware")
const { categoryValidator } = require("../controllers/validation/categoryValidation")
const { addCategoryController , getCatController, getAllCatController} = require("../controllers/category.controller")

// router.post("/create", addCategoryController)   //createCategory
router.post("/create", valid(categoryValidator), addCategoryController)   //createCategory
router.get("/", valid(categoryValidator), getAllCatController)   //getAllCategories
router.get("/:name", valid(categoryValidator), getCatController)   //getAllCategories
module.exports = router