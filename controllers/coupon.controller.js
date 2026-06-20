
const Coupons = require("../models/Coupons.models") 
exports.getAllCoupons = async (req, res,next) => {
    try {
        const allCoupons = await Coupons.find()
        return res.status(200).json({ Message: "All coupons: ", allCoupons });
    } catch (error) {
       next(error);
    }
};

exports.getCouponById = async (req, res,next) => {
    try {
        const coupon = await Coupons.findById(req.params.id)//.populate("categoryId", "name")
        if (!coupon) { return res.status(404).json({ Message: "Coupon is not found" }) }

        return res.status(200).json({ Message: "Coupon: ", coupon });
    } catch (error) {
       next(error);

    }
};

exports.createCoupon = async (req, res,next) => {
    try {
       // req.body.createdBy = req.userInfo.id;
        const newCoupon = new Coupons(req.body);
        await newCoupon.save();
        return res.status(201).json({ Message: "Coupon is created successfully", newCoupon });
    } catch (error) {
        next(error);
    }
};