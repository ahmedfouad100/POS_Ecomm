const Joi = require("joi")

// Joi Schema
const productValidator = Joi.object({
    posId:Joi.Number().required(),
    name:Joi.string().required(),
    description:Joi.string(),
    price:Joi.Number(),
    image:Joi.string(),
    categoryId:Joi.string(),
    bonusPts:Joi.Number(),
})

module.exports = {productValidator}
