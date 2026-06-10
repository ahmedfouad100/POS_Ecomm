const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    invoiceNumber:{type:String,trim:true},
    orderedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    soldBy:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    products:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}], // make option new/old if update
    orderType:{type:String,enum:["ecommDelivery","posWalkin"]}, // "CRM_Delivery","CRM_Reservation"
    orderStatus:{type:String,enum:["pending", "payed", "partialRefund", "fullRefund"]},
    paymentMethod:{type:String,enum:["cash","visa"]}, // +cashondelivery +visaondelivery
    discountedBy:{type:mongoose.Schema.Types.ObjectId,ref:"Coupon"},
},{timestamps:true});

const Order = mongoose.model("Order",ordersSchema);
module.exports = Order;