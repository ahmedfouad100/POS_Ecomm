const Joi = require("joi")

// Joi Schema
const couponValidator = Joi.object({
    name:Joi.string().min(3).max(50),
    description:Joi.string().min(4).max(50),
    discountType:Joi.string().valid("%","fixed"),
    discountValue:Joi.number(),
    duration:Joi.date(),
    used:Joi.boolean(),
})

module.exports = {couponValidator}



