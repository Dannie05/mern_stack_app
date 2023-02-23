import React from 'react'

export default function Test() {
  return (
    <div class="box">
        <div class="form">
            <h2>sign in</h2>
            <div class="inputBox">
                <input type="text" required=""/>
                <span>Username</span>
                <i></i>
            </div>

            <div class="inputBox">
                <input type="password" required=""/>
                <span>Password</span>
                <i></i>
            </div>

            <div class="links">
                {/* <a href="#">Forgot Password</a>
                <a href="#">Sign Up</a> */}
            </div>

             <input type="submit" value="Login"/> 
            <span>
            {/* <a href="#" class="neon-button">Log in</a> */}
        </span>
            
        </div>
    </div>
  )
}
