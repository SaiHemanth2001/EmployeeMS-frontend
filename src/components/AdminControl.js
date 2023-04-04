import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminControl = () => {
    const[employees,setEmployees] = useState([])
    const navigate = useNavigate();
    const api ='http://localhost:8083/employee/demo/all';
    const token = window.localStorage.getItem('jwt')
    axios.get(api,{headers: {"Authorization":`Bearer ${token}`}})
    .then((response)=>{
            setEmployees(response.data)
        }).catch(error=>{
            console.log(error);
        })
        const handler = (e)=>{
            e.preventDefault();
           localStorage.removeItem("jwt")
           navigate('/')      
        }

  return (
    <div>
         <br />
        <div className='left'>
        <span><a className='btn btn-primary' onClick={handler}>Sign Out</a></span>
        </div>
        <div className='btn btn-left'>
        <span><a href='/register-employee' className='btn btn-primary' >Register Employee</a></span>
        </div>
        <br />
        <h2 className='text-center'>Employee Details</h2>
       <table className="table table-bordered table-striped" >
        <thead>
         <tr>
            <th>Employee Id</th>
            <th> FirstName</th>
            <th> LastName</th>
            <th> Email</th>
            <th> Location</th>
            <th>Manager</th> 
            <th>Update</th> 
         </tr>         
        </thead>
        <tbody>
            {
                employees.map(
                    employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.location}</td>
                        <td>{employee.manager}</td>
        <td><span><a href={`/update/${employee.email}`} className='btn btn-primary'>Update</a></span></td>

                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default AdminControl
