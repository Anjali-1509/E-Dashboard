import { useState, useEffect } from "react"
import {useParams,useNavigate} from "react-router-dom"

export default function UpdateProduct(){
    const [name, setName]= useState("")
    const [price, setPrice]= useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand]= useState("")

    const params= useParams()
    const navigate= useNavigate()
   
    useEffect(()=>{
         getProductDetails()
    },[])

    const getProductDetails=async ()=>{
      let res = await fetch(`http://localhost:3000/product/${params.id}`)
      res= await res.json()
       setName(res.name)
       setPrice(res.price)
       setCategory(res.category)
       setBrand(res.brand)
    }

    const updateProduct=async ()=> {
     let res=await fetch(`http://localhost:3000/product/${params.id}`, {
         method: "put",
         body:JSON.stringify({name,price,category,brand}),
         headers:{
            "Content-Type": "application/json"
         }

     })
        res= await res.json()
        navigate('/')
    }

    return(
        <div className="addDiv">
            <h1 style={{color:"skyblue"}}>Update Product</h1>
            <input className="inputBox" type="text" placeholder="Enter Product Name"
             value={name}  onChange={(e)=>setName(e.target.value)}
            />


            <input className="inputBox" type="text" placeholder="Enter Product Price"
            value={price}  onChange={(e)=>setPrice(e.target.value)}
            />

            <input className="inputBox" type="text" placeholder="Enter Product Category"
            value={category}  onChange={(e)=>setCategory(e.target.value)}
            />

            <input className="inputBox" type="text" placeholder="Enter Product Brand"
            value={brand}  onChange={(e)=>setBrand(e.target.value)}
            />

            <button onClick={updateProduct} className="appButton">UPDATE</button>
        </div>
    )
}