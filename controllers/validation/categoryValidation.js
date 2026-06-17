const Joi = require("joi")

// Joi Schema
const categoryValidator = Joi.object({
    name:Joi.string().min(4).max(50).lowercase().required(),
    description:Joi.string(),
})

module.exports = {categoryValidator}


