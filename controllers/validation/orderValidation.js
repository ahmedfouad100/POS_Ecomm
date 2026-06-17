const Joi = require("joi")

// Joi Schema
const orderValidator = Joi.object({
    invoiceNumber:Joi.Number().required(),
    orderedBy:Joi.String(),
    soldBy:Joi.String(),
    products:Joi.array().String(),                                            // =>????
    productsQty:[{type:Number}],                                              // =>????
    orderType:Joi.String().valid("ecommDelivery","posWalkin"), 
    orderStatus:Joi.String().valid("pending","payed","partialRefund","fullRefund"),
    paymentMethod:Joi.String().valid("cash","visa"),
    attachedCoupon:Joi.String(),
})

module.exports = {orderValidator}