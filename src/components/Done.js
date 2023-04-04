import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Done = () => {
    const [email, setEmail] = useState("")
    const[manager,setManager]=useState("")
    const navigate= useNavigate();

    const updateStatus=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8086/assign/done"+"/"+email,{
            email:email,
            manager:manager,
        }).then(res=>{
            console.log(res.data)
            navigate(`/employee/${email}`)
        }).catch(error=>{
            console.log(error)
        })
    }



  return (
    <div className="form">
    <h2 className='footer'>Update Status</h2>
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
          <button type="submit" className="btn btn-success" onClick={(e) => updateStatus(e)}>Done</button>
      </div>
  </div> 
  )
}

export default Done
