// require Joi
// Joi Schema
// Export
// ________________________________

// require joi
const Joi = require("joi")

// Joi Schema
const loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required()
})

module.exports = loginSchema