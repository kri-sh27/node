
import React,{useState} from "react";

const SignUp=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const collectData=()=>{
        console.warn(name,email,password)
    }

    return(
        <div className="register"> <h1>Register</h1>
        <input className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name"/>
        <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email"/>

        <input className="inputBox" value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter Password"/>
        <button onClick={collectData} className="appButton" type="button">Sign Up</button>

        </div>
    )
}

export default SignUp;