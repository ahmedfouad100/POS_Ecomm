const mongoose = require("mongoose");

const productItem = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  qty: {
    type: Number,
    min: 1,
  },
});


const ordersSchema = mongoose.Schema({
    invoiceNumber:{type:String,trim:true},
    orderedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    soldBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    productsId:[productItem], // make option new/old if update
    orderType:{type:String,enum:["ecommDelivery","posWalkin"]}, // "CRM_Delivery","CRM_Reservation"
    orderStatus:{type:String,enum:["pending", "payed", "partialRefund", "fullRefund"]},
    paymentMethod:{type:String,enum:["cash","visa"]}, // +cashondelivery +visaondelivery
    attachedCoupon:{type:mongoose.Schema.Types.ObjectId,ref:"Coupon"},
},{timestamps:true});

const Order = mongoose.model("Order",ordersSchema);
module.exports = Order;