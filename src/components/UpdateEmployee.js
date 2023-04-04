import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateEmployee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate =useNavigate();
    const {emai} = useParams();

    const updateEmployee =(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8083/employee/updateEmployee"+"/"+emai,{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
        }).then(res=>{
             console.log(res.data)
            navigate(`/employee/${email}`)
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
                <h2 className="text-center">Update Employee</h2>
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
                       

                        <button className="btn btn-primary" onClick={(e) => updateEmployee(e)}>Update</button>

                        <Link to={`/employee/${email}`} className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UpdateEmployee
