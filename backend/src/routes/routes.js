const express = require("express")
const { createProduct, getProduct, deleteProduct, getProductById, searchProduct,updateProduct} = require("../controller/productController")
const router = express.Router()
const {createUser, loginUser}= require("../controller/userController")

router.get("/test", (req,res)=> {
    res.send("Hi i am api")
})

router.post("/register", createUser)
router.post("/login", loginUser)
router.post("/add-product", createProduct)
router.get("/products", getProduct)
router.delete("/product/:id", deleteProduct)
router.get("/product/:id", getProductById)
router.put("/product/:id", updateProduct)
router.get("/search/:key", searchProduct)

module.exports= router