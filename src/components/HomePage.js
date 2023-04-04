import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import id from './computer.jpg'
import cube from './workspace.jpg'
import backpacker from './code.jpg'

const HomePage = () => {
  return (
    <div >
   <Carousel fade>
      <Carousel.Item>
        <img
          src={cube}
          alt="First slide"
          width={1100}
          height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src={backpacker}
          alt="Second slide"
          width={1100}
          height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={id}
          alt="Third slide"
          width={1100}
          height={400}
        />
      </Carousel.Item>
    </Carousel>

    
    <br /><br />
    <div className='center'><h1>Employee Management System :</h1><br />
  
      <a href="/employee-login" className='btn btn-warning btn-color btn-bg-color btn-sm col-xs-2 margin-left'> Employee Login </a><br /><br />

      <a href='/admin-login' className='btn btn-warning btn-color btn-bg-color btn-sm col-xs-2 margin-left'>Admin Login </a><br /><br />

      <a href='/manager-login' className='btn btn-warning btn-color btn-bg-color btn-sm col-xs-2 margin-left'>Manager Login </a>
    </div>
    </div>
  )
}

export default HomePage
