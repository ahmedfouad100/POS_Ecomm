// Users Model
// Joi Schema
// JWT
// Function
// Export
//________________________
// Users 
const Categories = require("../models/Categories.models")
const getCatController = async(req,res)=>{
    try{
        // const {email,password} = req.body ;
        let categoryName = (req.params.name).toLowerCase()
        // check Users found or not
        const category = await Categories.findOne({name:categoryName}) // findOne({email:value.email}) email=> from db : value.email // +password => password select in schema is false, +password make it select true
        if(!category) return res.status(400).json({
            msg: "Invalid Category",
        })
        res.status(200).json({
            msg:"Category is found successfully",
            category,
        })
    }
    catch(error){
        console.log(error)
    }
}

const getAllCatController = async(req,res)=>{
    try{
        // const {email,password} = req.body ;
        // check Users found or not
        const category = await Categories.find() // findOne({email:value.email}) email=> from db : value.email // +password => password select in schema is false, +password make it select true
        if(!category) return res.status(400).json({
            msg: "Invalid Categories",
        })
        res.status(200).json({
            msg:"All Categories are listed",
        })
    }
    catch(error){
        console.log(error)
    }
}

const addCategoryController = async(req,res)=>{
    try{
        // const {precategory} = req.body ;
        // check Users found or not
        const category = await Categories.findOne(req.body)
        if(category) return res.status(400).json({
            msg: "Category is added previously"
        })

        const newCategory = new Categories(req.body)
        await newCategory.save()
        // token
        res.status(200).json({
            msg:"Category is Added Successfuly",
            newCategory
        })
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    getCatController,
    getAllCatController,
    addCategoryController
}