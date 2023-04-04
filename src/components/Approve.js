import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Approve = () => {

    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [reason,setReason]=useState("")
    const[manager,setManager]=useState("")
    const navigate= useNavigate();
    const approveLeave=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8085/leave/approve"+"/"+email,{
            email:email,
            date:date,
            reason:reason,
            manager:manager,
        }).then(res=>{
            console.log(res.data)
            navigate(`/manager/${manager}`)
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <div className="form">
        <h2 className='footer'>Approve Leave</h2>
          <div className="form-body">
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="manager">
                  <label className="form__label" htmlFor="manager">Manager</label>
                  <input className="form__input" type="text" id="manager" placeholder="Manager Name"value={manager}
                                        onChange={(e) => setManager(e.target.value)}/>
              </div>

          </div>
          <div className="footer">
              <button type="submit" className="btn btn-primary" onClick={(e) => approveLeave(e)}>Approv</button>
          </div>
      </div>      
  )
}

export default Approve
