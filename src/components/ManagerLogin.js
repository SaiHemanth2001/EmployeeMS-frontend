import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ManagerLogin = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate =useNavigate();

    const authenticateManager=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8081/manager/authenticate",{
            email:email,
            password:password
        }).then(res=>{
            window.localStorage.setItem("jwt",res.data)
             navigate(`/manager/${email.substring(0,email.indexOf('@'))}`)
        }).catch(error=>{
            console.log(error)
            alert('Wrong Username or Password ')
        })
    }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"onClick={(e)=>authenticateManager(e) }>
              Submit
            </button>
            <div className='d-grid slide'>
           <a href='/' className='btn btn-primary'>Home</a> 
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ManagerLogin
