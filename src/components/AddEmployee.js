import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddEmployee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[location,setLocation]=useState('')
    const[manager,setManager]=useState('')
    const navigate =useNavigate();

    const saveEmployee =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8083/employee/saveEmployee",{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            location:location,
            manager:manager
        }).then(res=>{
             console.log(res.data)
            navigate("/admin")
        }).catch(error=>{
            console.log(error)
            alert('error')
        })
    }

  return (
    <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Register Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter the Email Id"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter the password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Location</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the Location"
                                        name="location"
                                        className="form-control"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Manager</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the Manager"
                                        name="manager"
                                        className="form-control"
                                        value={manager}
                                        onChange={(e) => setManager(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Submit</button>

                                <Link to="/admin" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddEmployee
