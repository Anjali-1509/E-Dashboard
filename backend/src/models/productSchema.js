const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  },
  category:String,
  productImage:String,
  userId:String,
  brand:String
})

module.exports= mongoose.model("Product", productSchema)