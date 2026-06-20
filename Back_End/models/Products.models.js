const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    posId:{type:Number,required:true,trim:true},
    name:{type:String,required:true,trim:true},
    description:{type:String},
    price:{type:Number},
    image:{type:String},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"Category"},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    bonusPts:{type:Number},
},{timestamps:true})

module.exports = mongoose.model("Product",ProductSchema);