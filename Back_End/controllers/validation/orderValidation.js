const Joi = require("joi")

// Joi Schema
const orderValidator = Joi.object({
    invoiceNumber:Joi.number().required(),
    orderedBy:Joi.string(),
    soldBy:Joi.string(),
    productsId:Joi.array().items(
        Joi.object({
            product:Joi.string(),
            qty:Joi.number()
        })),                                            // =>????                                        // =>????
    orderType:Joi.string().valid("ecommDelivery","posWalkin"), 
    orderStatus:Joi.string().valid("pending","payed","partialRefund","fullRefund"),
    paymentMethod:Joi.string().valid("cash","visa"),
    attachedCoupon:Joi.string(),
})

module.exports = {orderValidator}