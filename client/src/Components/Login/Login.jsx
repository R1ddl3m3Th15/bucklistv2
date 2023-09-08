import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import video from '../../LoginAssets/computer.mp4'

const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
                <div className="textDiv">
                    <h2 className='title'>Richpanel</h2>
                    <p>Ease of Use!</p>
                </div>
                <div className="footerDiv flex">
                    <span className="text">Don't have an account?</span>
                    <Link to = {'/register'}>
                    <button className='btn'>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login