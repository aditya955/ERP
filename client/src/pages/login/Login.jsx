import './style.scss'
import React, { useState } from 'react'

const Login = () => {

  const [action,setAction]=useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
          <img src="/images/person.png" alt="" />
          <input type ="text" placeholder="Name" />
        </div>}
      
        <div className="inputs">
        <div className="input">
          <img src="/images/email.png"alt="" />
          <input type ="email" placeholder="Email Id"/>
        </div>
        <div className="inputs">
        <div className="input">
          <img src="/images/password.png"alt="" />
          <input type ="password" placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>}
      </div>
      </div>
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>

      </div>

  );
  
};
export default Login;
