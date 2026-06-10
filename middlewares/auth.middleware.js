// require jwt
// acquire token
// if no token given
// get token from bearer
// jwt.verify  decode token 
// if false token
// pass decode as admin data
//__________________________

const jwt = require("jsonwebtoken")

exports.verifyAdminToken =(res,req,next)=>{
    
try {

    //acquire token
    const token = req.headers.authorization
    if(!token) res.status(401).json({
        msg:"No token provided"
    })

    // pure token without bearer
    if(token.startswith("Bearer ")){
        token = token.split(" ")[1]
    }

    // decode token & verify
    const decode = jwt.verify(token,process.env.JWT_SECRET)
    if(!decode) return res.status(400).json({
        msg:"Token is expired or invalid"
    })
    req.adminInfo = decode;
    next()

} catch(error){
    console.log(error)
}

}