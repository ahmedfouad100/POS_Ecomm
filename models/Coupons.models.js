const mongoose = require("mongoose");

const couponsSchema = mongoose.Schema({
    name:{type:String,trim:true},
    description:{type:String},
    discountType:{type:String,enum:["%","fixed"]},
    discountValue:{type:number},
    duration:{type:Date},
    used:{type:Boolean,default:false},
},{timestamps:true});

const Coupon = mongoose.model("Coupon",couponsSchema);
module.exports = Coupon;



