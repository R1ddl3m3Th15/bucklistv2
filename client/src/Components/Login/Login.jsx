import React from 'react'
import './Login.css'
import '../../App.css'
import '../../App.scss'
import { Link, NavLink } from 'react-router-dom'

import video from '../../LoginAssets/trip.mp4'
import logo from '../../LoginAssets/STD.png'

import {FaUserShield} from 'react-icons/fa'
import {BsShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className="container flex">

            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className='title'>Bucklist</h2>
                    <p>Budget trips with your Buddies</p>
                </div>
                <div className="footerDiv flex">
                    <span className="text">Don't have an account?</span>
                    <Link to = {'/register'}>
                    <button className='btn'>Sign Up</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Welcome Back!</h3>
                </div>

                <form action="" className='form grid'>
                    <span>Login status will go here</span>

                <div className="inputDiv">
                    <label htmlFor="username">Username</label>
                    <div className="input flex">
                      <FaUserShield className = 'icon' />
                      <input type = "text" id='username' placeholder='Enter Username' />
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input flex">
                      <BsShieldLockFill className = 'icon' />
                      <input type = "password" id='password' placeholder='Enter Password' />
                    </div>
                </div>

                    <button type='submit' className='btn flex'>
                        <span>Login</span>
                        <AiOutlineSwapRight className = 'icon'/>
                    </button>

                    <span className='forgotPassword'>
                        Forgot your password? <a href="">Click Here</a>
                    </span>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login