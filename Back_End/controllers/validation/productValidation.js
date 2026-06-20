const Joi = require("joi")

// Joi Schema
const productValidator = Joi.object({
    posId:Joi.number().required(),
    name:Joi.string().required(),
    description:Joi.string(),
    price:Joi.number(),
    image:Joi.string(),
    categoryId:Joi.string(),
    bonusPts:Joi.number(),
})

module.exports = {productValidator}
