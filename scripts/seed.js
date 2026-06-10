// require dotenv
// require mongoose
// require Admin model
// Create New Function(Server)
// Run/Invoke the Function

//
require("dotenv").config()

const mongoose = require("mongoose")

const Admin = require("../models/Admin")

const seedSuperAdmin = async () => {

    try {
        // DB connected
        // Check Admin
        // Create Admin
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB is connected")
        const existAdmin = await Admin.findOne({ email: process.env.EMAIL_ADMIN })
        if (existAdmin) return console.log("User already found")
        const newAdmin = {
            username:"Super Admin",
            email:process.env.EMAIL_ADMIN,
            password:process.env.PASSWORD_ADMIN
        }
        const admin = await Admin.create(newAdmin)
        console.log(admin)
    }
    catch (error) {
        console.log(error)
    } 
    finally {
        await mongoose.connection.close()
        console.log("DB is closed")
        process.exit(0)   // 0 => true , 1 => false
    }
}
seedSuperAdmin();