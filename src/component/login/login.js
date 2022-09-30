import React from 'react'
import logo from "../Images/logologin.svg"
import email from "../Images/emaillogin.svg"
import password from "../Images/passwordlogin.svg"


import "./login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='loginpage'>
        <Link to="/"><div className='logologin'>
            <img src={logo}></img>
            <p>NESCO 2022</p>
        </div></Link>
        <div className='loginbox'>
            <div className='loginfield'>
                <h5>Login</h5>
                <div className='userfield'>
                    <form>
                        <img src={email}></img>
                        <label>E-mail</label><br></br>
                        <input type="text"></input><br></br>
                        <img src={password}></img>
                        <label>Password</label><br></br>
                        <input type="password"></input>
                    </form>
                </div>
                <a href='' className='login'>Login</a>
                <a href="" className='login google'>Continue With Google</a>
                <div className='loginhandling'>
                    <a className='logininfo'>Don't have an account? <Link to="/signup"><span href=""> Sign Up</span></Link></a>
                    <a className='logininfo'>Forgot Password?</a>
                </div>
            </div>
        </div>
    </div>
  )
}
