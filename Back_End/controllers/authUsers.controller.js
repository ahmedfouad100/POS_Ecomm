// Users Model
// Joi Schema
// JWT
// Function
// Export
//________________________
// Users 
const Users = require("../models/Users.models")

// const {loginSchema,registerSchema} = require("./validation/authUsersValidation")

const jwt = require("jsonwebtoken")

// validate joi => check user => checkpass => gentoken 
const loginController = async(req,res)=>{
    try{
        // joi validation
        // const {error,value} = loginSchema.validate(req.body,{
        //     abortEarly:false,
        //     stripeUnknown:true
        // })
        // if(error) return res.status(400).json({
        //     msg: error.details.map((err)=>err.message),
        // })

        // check user
        // get data from value
        // const {email,password} = value ;
        const {email,password} = req.body ;
        // check Users found or not
        const user = await Users.findOne({email}).select("+password") // findOne({email:value.email}) email=> from db : value.email // +password => password select in schema is false, +password make it select true
        if(!user) return res.status(400).json({
            msg: "Invalid Email or Password"
        })
        // compare pass
        const matchedPassword = await user.comparePassword(password);
        if(!matchedPassword) return res.status(400).json({
            msg: "Invalid Email or Password"
        })

        // token
        const token = jwt.sign(    // when to write await with token or not  e.g await jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.status(200).json({
            msg:"Login successfully",token   // we need to print token ===> write await, if not don't write
        })
    }
    catch(error){
        console.log(error)
    }
}
const registerController = async(req,res)=>{
    try{
        // joi validation
        // const {error,value} = registerSchema.validate(req.body,{
        //     abortEarly:false,
        //     stripeUnknown:true
        // })
        // if(error) return res.status(400).json({
        //     msg: error.details.map((err)=>err.message),
        // })

        // check user
        // get data from value
        const {email,password} = value ;
        // check Users found or not
        const user = await Users.findOne({email})
        if(user) return res.status(400).json({
            msg: "Email is currently used by another user please write another email"
        })

        const newUser = new Users(value)
        await newUser.save()
        newUser.password = undefined
        // token
        const token = jwt.sign(    // when to write await with token or not???  e.g await jwt.sign(
            {id:newUser._id,role:newUser.role},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.status(200).json({
            msg:"Registered successfully",token   // we need to print token ===> write await, if not don't write
        })
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    loginController,
    registerController
}