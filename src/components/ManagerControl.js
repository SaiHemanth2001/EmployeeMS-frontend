import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ManagerControl = () => {
    const[employees,setEmployees] = useState([])
    const {manager} = useParams('');
    const[leaves,setLeaves]=useState([]);
    const[assigns,setAssigns]=useState([]);
    const navigate = useNavigate();
    const api ='http://localhost:8083/employee/manager'+'/'+manager;
    const api1= 'http://localhost:8085/leave/manager'+'/'+manager;
    const api2 ='http://localhost:8086/assign/manager'+'/'+manager;
    const token = window.localStorage.getItem('jwt')
    axios.get(api,{headers: {"Authorization":`Bearer ${token}`}})
    .then((response)=>{
            setEmployees(response.data)
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
                    </tr>
                )
            }
        </tbody>
      </table>
        <br />

      <table className='table-bordered '>
        <thead>
            <th>Assign Work</th>
        </thead>
        <tbody>
            <td><span><a href='/assign' className='btn btn-primary'>Assign</a></span></td>
        </tbody>
      </table>
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
            <th>Update Approval</th>
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
            <td><span><a href='/approve' className='btn btn-primary'>Approve</a><a href='/reject' className='btn btn-danger'>Reject</a></span></td>
            </tr>
        )}
        </tbody>
      </table>
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
            </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default ManagerControl
