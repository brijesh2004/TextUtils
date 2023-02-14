import React, { useState }  from 'react'
import PropTypes from 'prop-types'
export default function Registration(props) {
  const [MyStyleR , setStyleR] =useState({
   display:"block",
  })
  const [MyStylel , setStylel] =useState({
  display:"none",
  background:"none"
  })
  const [bcChange , setbc] =useState({
    background:"linear-gradient(90deg,rgb(1, 1, 255) , rgb(99, 58, 160))",
    color:"white",
    borderRadius:"20px"
    })
    const [bcChangeL , setbcL] =useState({
      background:"none",
      color:"black",
      borderRadius:"20px"
      })
    const ChangeStateR = () =>{
          setStyleR(
            {
              display:"block"
              
            }
          )
          setStylel(
            {
              display:"none"
            }
          )
          setbc({
            background:"linear-gradient(90deg,rgb(1, 1, 255) , rgb(99, 58, 160))",
            color:"white",
            borderRadius:"20px"
          })
          setbcL({
            background:"none",
            color:"black",
            borderRadius:"20px"
          })
    }
    const ChangeStateL = () =>{
      setStyleR(
        {
          display:"none"
        }
      )
      setStylel(
        {
          display:"block"
        }
      )
      setbcL({
        background:"linear-gradient(90deg,rgb(1, 1, 255) , rgb(99, 58, 160))",
        color:"white",
        borderRadius:"20px"
      })
      setbc({
        background:"none",
        color:"black",
        borderRadius:"20px"
      })
}

    return (
        <>
      <div className='register'>
      <h1>Create Your Acoout</h1>
      <button className='btninbtn'>
      <button className='btn' id="btnregister" onClick={ChangeStateR} style={bcChange}>register</button>
      <button className='btn' id="btnlogin" onClick={ChangeStateL} style={bcChangeL}> login</button>
      </button>
     <br />
     <form action="" className="registrationform" style={MyStyleR}>
      <input type="text" placeholder='Enter your Full Name' className='resinp' required="true"/> <br />
      <input type="email" placeholder='Enter your Email' className='resinp' required="true"/> <br />
      <input type="password" placeholder='Create Your Password' className='resinp' required="true"/><br />
      <input type="password" placeholder='Confirm Password' className='resinp' required="true"/><br />
      <button type='submit' className='submitbtn'>Submit</button>
      </form>
      
      <form action="" className="loginform" style={MyStylel}>
      <input type="email" placeholder='your Email' className='resinp' required="true"/> <br />
      <input type="password" placeholder='Your Password' className='resinp' required="true"/><br />
      <button type='submit' className='submitbtn'>Submit</button>
      </form>


            </div>
      </>
    )
  
}


