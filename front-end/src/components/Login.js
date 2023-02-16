import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword]= useState("")
  const navigate= useNavigate()

  useEffect(()=> {
   const auth=localStorage.getItem('user')
   if(auth){
    navigate("/")
   }
  },[])

  const handleLogin = async()=>{
    let res= await fetch("http://localhost:3000/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type": "application/json"
      }
    })
    res= await res.json()
    console.log(res)
    if(res.name){
       localStorage.setItem("user", JSON.stringify(res))
       navigate("/")
    }
    else{
      alert("Please Enter Correct Details 😐")
    }
  }
  
    return(
        <div className="loginDiv">
             <h1 style={{color:"skyblue"}}>Login</h1>
            <input type="email" className="inputBox" 
            onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email"/>

             <input className="inputBox" type="password" 
             value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={handleLogin} className="appButton">Login</button>
        </div>
    )
}