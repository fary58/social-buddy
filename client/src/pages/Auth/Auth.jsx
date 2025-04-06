import React from 'react'
import "./Auth.css";


const Auth = () =>{
    if(localStorage){
        return <SignUp/>    
    }
}

const SignUp = () =>{
    return <Authenticate/>
}


function Authenticate (){

    return (
        <div className="a-right">
          <form className="infoForm authForm">
            <h3>Sign up</h3>
    
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstName"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastName"
              />
            </div>
    
            <div>
              <input
                type="text"
                className="infoInput"
                name="username"
                placeholder="Username"
              />
            </div>
    
            <div>
              <input
                type="password"
                className="infoInput"
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                className="infoInput"
                name="confirmPassword"
                placeholder="Confirm Password"
    
              />
            </div>
    
            <div>
              <span style={{ fontSize: '12px' }}>Already have an account.</span>
            </div>
            <button className="button infoButton" >Signup</button>
          </form>
        </div>
      );

}


export {Auth,SignUp};