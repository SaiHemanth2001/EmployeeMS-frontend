import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Assign = () => {

    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [todo,setTodo]=useState('')
    const[manager,setManager]=useState('')
    const[checkStatus,setCheckStatus]=useState('IN_PROGRESS')
    const navigate= useNavigate();

    const applyLeave=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8086/assign/task",{
            email:email,
            date:date,
            todo:todo,
            manager:manager,
            checkStatus:checkStatus
        }).then(res=>{
            console.log(res.data)
            navigate('/')
        }).catch(error=>{
            console.log(error)
        })
    }
    
  return (
    <div className="form">
        <h2 className='footer'>Assign Task</h2>
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
              <div className="todo">
                  <label className="form__label" htmlFor="todo">ToDo</label>
                  <input className="form__input" type="text" id="todo" placeholder="What To Do"value={todo}
                                        onChange={(e) => setTodo(e.target.value)}/>
              </div>
              <div className="checkStatus">
                  <label className="form__label" htmlFor="checkStatus">CheckStatus</label>
                  <input className="form__input" type="text" id="checkStatus" placeholder=""value={checkStatus}
                                        onChange={(e) => setCheckStatus(e.target.value)} readOnly/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn btn-primary" onClick={(e) => applyLeave(e)}>Apply</button>
          </div>
      </div>      
  )
}

export default Assign
