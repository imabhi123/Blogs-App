import React from 'react'
import { useState} from 'react';
import { useNavigate } from "react-router-dom";
const Login = (props) => {
    const [credentials,setCredentials]=useState({email:"",password:""});
    let history=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json = await response.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authToken);
            history("/");
            props.showAlert("login successful","success")
        }
        else {
            props.showAlert("Invalid credentials","danger")
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
