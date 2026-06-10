// dot env
// express 
// middleware json
// simple logger
// connection db
// port
// run server
// -------------------------

// dotenv
require("dotenv").config();

//express
const express = require("express")
const app = express();

// for socket io step 0
const http = require("http")
const server = http.createServer(app)
// morgan middleware
const morgan = require("morgan")

//middleware json
app.use(express.json())

// simple logger
if (process.env.NODE_ENV === "dev") {
    // app.use((req, res, next) => {
    //     console.log(`${req.method} ${req.originalUrl}`)
    //     next();
    // })
    app.use(morgan("dev"));   // dev for morgan format it is not related to the dev in the env
}

app.get("/test",(req,res)=>{
    res.json({msg:"Test Route"})
})



// db config connection
const connectdb = require("./config/db")
connectdb();

const adminRoutes = require("./routes/auth.route")
app.use("/api/dashboard",adminRoutes)
// app.use("/api",adminRoutes)


// init socket server => 1
const {Server} = require("socket.io")
const io = new Server(server,{
    cors: {
        origin:"*",
        methods:["GET","POST"]
    }
})

require("./sockets/chat.socket")(io)  // (io) act as/instead app.use



// Port
const port = process.env.PORT || 3000;

// Create and Run server
// app.listen(port,()=>{
//     console.log(`Server is Running ${port}`)
// })

// listen for express and socket 
server.listen(port,()=>{
    console.log(`Server is Running ${port}`)
})