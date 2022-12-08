const mongoose=require('mongoose')
const proSc = new mongoose.Schema({
name:{type:String,required:true},
price:{type:Number,required:true},
quantity:{type:Number,required:true},
description:{type:String},
img:{type:String},

})
module.exports=mongoose.model('product',proSc)
//product table
//