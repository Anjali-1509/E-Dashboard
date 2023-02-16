import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"

export default function SignUp(){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email,  setEmail] = useState("")
    const navigate= useNavigate()
   
    useEffect(()=>{
     const auth = localStorage.getItem("user")
     if(auth){
        navigate("/")
     }
    })

    const collectData= async()=>{
       let result= await fetch("http://localhost:3000/register", {
        method: "Post",
        body:JSON.stringify({name,email,password}),
        headers:{
            "Content-Type": "application/json"
        },
       });
       result = await result.json()
       if(result){
        navigate("/")
       }
       localStorage.setItem("user", JSON.stringify(result))
       console.log(result)
    }
    return(
        <div className="signupDiv">
            <h1 style={{color:"skyblue"}}>Register</h1>
             <input className="inputBox" type="text" 
             value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />

             <input className="inputBox" type="email"
             value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder="Enter Email" />

             <input className="inputBox" type="password" 
             value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />

             <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}