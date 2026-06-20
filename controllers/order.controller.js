
const Orders = require("../models/Orders.models") 
exports.getAllOrders = async (req, res,next) => {
    try {
        const allOrders = await Orders.find().populate("productsId.product", "name")//.populate("createdBy", "name email");
        return res.status(200).json({ Message: "All orders: ", allOrders });
    } catch (error) {
       next(error);
    }
};

exports.getOrderById = async (req, res,next) => {
    try {
        const order = await Orders.findById(req.params.id).populate("productsId.product", "name")//.populate("categoryId", "name")//.populate("createdBy", "name email");
        if (!order) { return res.status(404).json({ Message: "Order is not found" }) }

        return res.status(200).json({ Message: "Order: ", order });
    } catch (error) {
       next(error);

    }
};

exports.createOrder = async (req, res,next) => {
    try {
       // req.body.createdBy = req.userInfo.id;
        const newOrder = new Orders(req.body);
        await newOrder.save();
        return res.status(201).json({ Message: "order is created successfully", newOrder });
    } catch (error) {
        next(error);
    }
};