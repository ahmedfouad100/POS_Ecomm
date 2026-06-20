
const Products = require("../models/Products.models") 
exports.getAllProducts = async (req, res,next) => {
    try {
        const allProducts = await Products.find().populate("categoryId", "name").populate("createdBy", "name email");
        return res.status(200).json({ Message: "All products: ", allProducts });
    } catch (error) {
       next(error);
    }
};

exports.getProductById = async (req, res,next) => {
    try {
        const product = await Products.findById(req.params.id).populate("categoryId", "name")//.populate("createdBy", "name email");
        if (!product) { return res.status(404).json({ Message: "Product is not found" }) }

        return res.status(200).json({ Message: "Product: ", product });
    } catch (error) {
       next(error);

    }
};

exports.createProduct = async (req, res,next) => {
    try {
       // req.body.createdBy = req.userInfo.id;
        const newProduct = new Products(req.body);
        await newProduct.save();
        return res.status(201).json({ Message: "product is created successfully", newProduct });
    } catch (error) {
        next(error);
    }
};