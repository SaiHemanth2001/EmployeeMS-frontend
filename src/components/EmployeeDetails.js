import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeDetails = () => {
    const[employee,setEmployee]=useState({});
    const[leaves,setLeaves]=useState([]);
    const[assigns,setAssigns]=useState([]);
    const {email} = useParams();
    const navigate= useNavigate();
    const api ='http://localhost:8083/employee/demo/email'+'/'+email;
    const token = window.localStorage.getItem('jwt')
    const api1= 'http://localhost:8085/leave/email'+'/'+email;
    const api2 ='http://localhost:8086/assign/email'+'/'+email;
    axios.get(api,{headers: {"Authorization":`Bearer ${token}`}})
    .then((response)=>{
            setEmployee(response.data)
        }).catch(error=>{
            console.log(error);
        })
    axios.get(api1)
    .then((response)=>{
            setLeaves(response.data)
        }).catch(error=>{
            console.log(error);
        })
        axios.get(api2)
        .then((response)=>{
                setAssigns(response.data)
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
        <br /><br />
          <table className='table table-bordered table-striped'>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Id</th>
          <th>Location</th>
          <th>Manager</th>
          <th>Update</th>
        </tr>
      </thead>  
      <tbody>
        <td>{employee.id}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
        <td>{employee.location}</td>
        <td>{employee.manager}</td>
        <td><span><a href={`/update/${employee.email}`} className='btn btn-primary'>Update</a></span></td>
      </tbody>
      </table>
      <table className='table-bordered '>
        <thead>
            <th>Apply for Leave</th>
        </thead>
        <tbody>
            <td><span><a href='/leave' className='btn btn-danger'>Leave</a></span></td>
          
        </tbody>
      </table>
      <br />
      <br />
      <h4 className='text-center'>Applied Leave</h4>
      <table className='table table-bordered table-striped'>
        <thead>
            <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Manager</th>
            <th>Approval</th>
            </tr>
        </thead>
        <tbody>{
            leaves.map(
                leave =>
            <tr id={leave.id}>
            <td>{leave.id}</td>
            <td>{leave.email}</td>
            <td>{leave.date}</td>
            <td>{leave.reason}</td>
            <td>{leave.manager}</td>
            <td>{leave.approval}</td>
            </tr>
        )}
        </tbody>
      </table>
      <br />
      <br />
      <h4 className='text-center'>Assigned Work</h4>
      <table className='table table-bordered table-striped'>
        <thead>
            <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Date</th>
            <th>What To Do</th>
            <th>Manager</th>
            <th>Status</th>
            <th>Update Status</th>
            </tr>
        </thead>
        <tbody>{
            assigns.map(
                assign =>
            <tr id={assign.id}>
            <td>{assign.id}</td>
            <td>{assign.email}</td>
            <td>{assign.date}</td>
            <td>{assign.todo}</td>
            <td>{assign.manager}</td>
            <td>{assign.checkStatus}</td>
            <td><span><a href='/inprogress' className='btn btn-warning'>IN_PROGRESS</a><a href='/done' className='btn btn-success'>DONE</a></span></td>
            </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeDetails
