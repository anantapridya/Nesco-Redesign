import React from 'react'
import logo from "../Images/logologin.svg"
import email from "../Images/emaillogin.svg"
import password from "../Images/passwordlogin.svg"
import name from "../Images/namesignup.svg"
import confirm from "../Images/confirmpasswordsignup.svg"
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='loginpage'>
        <Link to="/"><div className='logologin'>
            <img src={logo}></img>
            <p>NESCO 2022</p>
        </div></Link>
        <div className='loginbox'>
            <div className='loginfield'>
                <h5>Sign Up</h5>
                <div className='userfield'>
                    <form>
                        <img src={name}></img>
                        <label>Name</label>
                        <input type="text"></input>
                        <img src={email}></img>
                        <label>E-mail</label><br></br>
                        <input type="text"></input><br></br>
                        <img src={password}></img>
                        <label>Password</label><br></br>
                        <input type="password"></input>
                        <img src={confirm}></img>
                        <label>Confirm Password</label>
                        <input type="password"></input>
                    </form>
                </div>
                <a href='' className='login'>Login</a>
                <a href="" className='login google'>Continue With Google</a>
                <div className='loginhandling'>
                    <a className='logininfo'>Already have an account? <Link to="/login"><span> Login</span></Link></a>
                </div>
            </div>
        </div>
    </div>
  )
}
