// Admin Model
// Joi Schema
// JWT
// Function
// Export
//________________________
// Admin 
const Admin = require("../models/Admin")

const loginSchema = require("./validation/authUsersValidation")

const jwt = require("jsonwebtoken")

// validate joi => check user => checkpass => gentoken 
const loginController = async(req,res)=>{
    try{
        // joi validation
        const {error,value} = loginSchema.validate(req.body,{
            abortEarly:false,
            stripeUnknown:true
        })
        if(error) return res.status(400).json({
            msg: error.details.map((err)=>err.message),
        })

        // check user
        // get data from value
        const {email,password} = value ;
        // check Admin found or not
        const admin = await Admin.findOne({email}).select("+password") // findOne({email:value.email}) email=> from db : value.email // +password => password select in schema is false, +password make it select true
        if(!admin) return res.status(400).json({
            msg: "Invalid Email or Password"
        })
        // compare pass
        const matchedPassword = await admin.comparePassword(password);
        if(!matchedPassword) return res.status(400).json({
            msg: "Invalid Email or Password"
        })

        // token
        const token = jwt.sign(    // when to write await with token or not  e.g await jwt.sign(
            {id:admin._id},
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
module.exports = loginController