const UserModel = require("../models/userSchema")

exports.createUser = async(req,res)=> {
    try{
    const data = req.body
    let createdData = await UserModel.create(data)
    createdData= createdData.toObject()
    delete createdData.password
    return res.status(201).send(createdData)
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}

exports.loginUser= async(req,res)=> {
  try{
  let {email,password} = req.body
  if(!email || !password) return res.status(400).send({status:false, message: "One of the fields is missing"})
  let user = await UserModel.findOne({email:email, password:password}).select({password:0, __v:0})
  if(!user) return res.status(404).send({status:false, message:"User Not Found"})
  return res.status(200).send(user)
  }
  catch(err){
    res.status(500).send({status:false, meaasage:err.message})
  }

}

