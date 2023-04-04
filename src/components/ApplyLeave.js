import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApplyLeave = () => {

    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [reason,setReason]=useState('')
    const[manager,setManager]=useState('')
    const[approval,setApproval]=useState('NOTAPPROVED')
    const navigate= useNavigate();

    const applyLeave=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8085/leave/apply",{
            email:email,
            date:date,
            reason:reason,
            manager:manager,
            approval:approval
        }).then(res=>{
            console.log(res.data)
            navigate('/')
        }).catch(error=>{
            console.log(error)
        })
    }

  return (
    <div className="form">
        <h2 className='footer'>Apply Leave</h2>
          <div className="form-body">
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="date">
                  <label className="form__label" htmlFor="date">Date </label>
                  <input className="form__input" type="date"  id="date" placeholder="Date" value={date}
                                        onChange={(e) => setDate(e.target.value)}/>
              </div>
              <div className="manager">
                  <label className="form__label" htmlFor="manager">Manager</label>
                  <input className="form__input" type="text" id="manager" placeholder="Manager Name"value={manager}
                                        onChange={(e) => setManager(e.target.value)}/>
              </div>
              <div className="reason">
                  <label className="form__label" htmlFor="reason">Reason</label>
                  <input className="form__input" type="text" id="reason" placeholder="Enter the Reason"value={reason}
                                        onChange={(e) => setReason(e.target.value)}/>
              </div>
              <div className="approval">
                  <label className="form__label" htmlFor="approval">Approval</label>
                  <input className="form__input" type="text" id="approval" placeholder=""value={approval}
                                        onChange={(e) => setApproval(e.target.value)}/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn btn-primary" onClick={(e) => applyLeave(e)}>Apply</button>
          </div>
      </div>      
  )
}

export default ApplyLeave
