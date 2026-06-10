// Auth middleware
// require jsonwebtoken
const jwt = require("jsonwebtoken")
const socketAuthMiddleware = (socket,next) =>{
    try {
        // get token
        const token = socket.handshake.headers.token // socket =>req & res, handshake , token => or any name put as key in post man 
        if(!token) return next(new Error("Not found token")) // because there is no response
        // Get payload
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        socket.userId = payload.id; // req.user => socket.user
        socket.role = payload.role;
        next()
    }catch(error){
        //return next(new Error("Invalid Token"))
        console.log(error)
    }
}

const chatSocketController = (io)=>{
    // use middleware
    io.use(socketAuthMiddleware)
    // run connection of socket.io
    io.on("connection",(socket)=>{
        console.log(`User ${socket.userId} & Role ${socket.role} is connected to socket server`)
    })
}
module.exports = chatSocketController
