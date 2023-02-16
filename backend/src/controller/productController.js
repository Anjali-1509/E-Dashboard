const ProductModel = require("../models/productSchema")
const uploadFile= require("../aws/aws")

exports.createProduct= async(req, res)=>{
 try{
 const data = req.body
 const createdData= await ProductModel.create(data)
 res.status(201).send(createdData)
 }
 catch(err){
    res.status(500).send({status:false,message:err})
 }
}

exports.getProduct= async(req,res)=> {
try{
let data = await ProductModel.find()
if(data.length===0){
   return res.status(200).send({status:false, message:"No Product Found"})
}
res.status(200).send(data)
}
catch(err){
   res.status(500).send({status:false, message:err.message})
}
}

exports.deleteProduct= async(req,res)=> {
try{
let productId= req.params.id
let deleteProduct= await ProductModel.deleteOne({_id:productId})
res.status(200).send(deleteProduct)
}
catch(err){
   return res.status(500).send({status:false, message:err.message})
}
}


exports.getProductById= async(req,res)=> {
try{
let productId = req.params.id
let product= await ProductModel.findOne({_id:productId})
if(!product) return res.status(404).send({status:false, message:"Product Not Found"})
return res.status(200).send(product)
}
catch(err){
   return res.status(500).send({status:false, message:err.message})
}
}


exports.updateProduct= async(req, res)=> {
try{
let productId = req.params.id
let product = await ProductModel.findOneAndUpdate(
   {_id:productId},
   {$set:req.body},
   {new:true}
)
return res.status(200).send(product)
}
catch(err){
   return res.status(500).send({status:false, message:err.message})
}
}

exports.searchProduct = async(req,res)=>{
   try{
    let key = req.params.key
    let product = await ProductModel.find({
      "$or":[
        {
         name: {$regex: req.params.key}
        },
        {
         category: {$regex: req.params.key}
        },
        {
         brand: {$regex: req.params.key}
        },
      ]
   })
   return res.status(200).send(product)
   }
   catch(err){
      return res.status(500).send({status:false, message:err.message})
   }
}