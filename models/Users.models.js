// Hook = function = middleware
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const joi = require("joi");

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        // required:[true,"Username is Required"] => Database engineer
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // if type:String
        // min: => if type:number
        select: false,
    },
    role: {
        type: String,
        enum: ["superAdmin", "admin", "user"],
        default: "user"
    },
}, { timestamps: true })

usersSchema.pre("save", async function (next) {   // or async ()=>  arrow function handles next automatically but doesn't handle this
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

usersSchema.methods.comparePassword = async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.password)
}

const User = mongoose.model("User", usersSchema)

module.exports = User