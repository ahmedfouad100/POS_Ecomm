// require Joi
// Joi Schema
// Export
// ________________________________

// require joi
const Joi = require("joi")

// Joi Schema
const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

const registerValidator = Joi.object({
    username:Joi.string().min(4).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role:Joi.string(),
    loyalPts:Joi.number(),
    avatar:Joi.string(),
})

module.exports = { loginValidator, registerValidator }