const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const multer= require("multer")
const routes= require("./routes/routes")
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(multer().any())

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://anjalis1509:anjalis1509@cluster0.rhdux0p.mongodb.net/E-Commerce", {
    useNewUrlParser:true
}).then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))

app.use("/", routes)

app.listen(3000, ()=> {
    console.log("Server is running on "+3000 )
})