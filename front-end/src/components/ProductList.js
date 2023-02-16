import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom"

export default function ProductList(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
      getData()
    },[])
    const getData = async()=>{
    let res= await fetch("http://localhost:3000/products")
    res= await res.json()
     setProducts(res)
    }
    
    const deleteProduct=async (id)=>{
     let res= await fetch(`http://localhost:3000/product/${id}`,{
      method: "Delete"
     }) 
     res= await res.json()
     if(res){
      alert("Product deleted successfully 🙂")
      getData()
     }
    }

    const searchHandle = async(event)=>{
    let key =event.target.value
    if(key){
    let res = await fetch(`http://localhost:3000/search/${key}`)
    res= await res.json()
    if(res){
      setProducts(res)
    }
  }
  else{
    setProducts()
  }
    }

    return (
        <div className='product-list'>
            <h1>Product List</h1>
            <input className='search' placeholder="Search" onChange={searchHandle}/>
            <ul>
                <li style={{"fontWeight": "bold","background":"skyblue"}}>S.no</li>
                <li style={{"fontWeight": "bold","background":"skyblue"}}>Name</li>
                <li style={{"fontWeight": "bold","background":"skyblue"}}>Price</li>
                <li style={{"fontWeight": "bold","background":"skyblue"}}>Category</li>
                <li style={{"fontWeight": "bold","background":"skyblue"}}>Brand</li>
                <li style={{"fontWeight": "bold","background":"skyblue"}}> Update</li>
                <li style={{"fontWeight": "bold","background":"skyblue"}}> operation</li>
            </ul>
            <ul>
              { 
                products.length>0 ? products.map((el, index)=>
                <ul className="product-list">
                <li>{index+1}</li>
                <li>{el.name}</li>
                <li>{el.price}</li>
                <li>{el.category}</li>
                <li>{el.brand}</li>
                 <li><Link className='update' to={`/update/${el._id}`}>Update</Link></li>
                 <li><button className='productButton' onClick={()=>deleteProduct(el._id)}>Delete</button></li>
                </ul>
              )
              :<h1>No Product Found</h1>
              }
            </ul>
        </div>
    )
}