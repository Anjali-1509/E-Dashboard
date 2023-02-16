import { useState } from 'react';

export default function AddProduct(){
    const [name, setName]= useState("")
    const [price, setPrice]= useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand]= useState("")
    const [error, setError]= useState("")

    const addProduct=async ()=> {
     if(!name || !price || !category || !brand){
        setError(true)
        return false
     }
     const userId = JSON.parse(localStorage.getItem("user"))._id
     let res= await fetch("http://localhost:3000/add-product", {
        method:"post",
        body:  JSON.stringify({name,price,category,brand}),
        headers:{
        "Content-Type": "application/json"
        }
     })
     res= await res.json()
     console.log(res)
    }

    return(
        <div className="addDiv">
            <h1 style={{color:"skyblue"}}>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter Product Name"
             value={name}  onChange={(e)=>setName(e.target.value)}
            />
             {error && !name && <span className='invalid-input' >Enter valid name</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Price"
            value={price}  onChange={(e)=>setPrice(e.target.value)}
            />
            {error && !price && <span className='invalid-input' >Enter valid price</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Category"
            value={category}  onChange={(e)=>setCategory(e.target.value)}
            />
            {error && !category && <span className='invalid-input' >Enter valid category</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Brand"
            value={brand}  onChange={(e)=>setBrand(e.target.value)}
            />
            {error && !brand && <span className='invalid-input' >Enter valid brand</span>}

            <button onClick={addProduct} className="appButton">ADD</button>
        </div>
    )
}