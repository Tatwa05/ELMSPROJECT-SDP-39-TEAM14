import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Contact from './Contact'
import './style.css'

export default function MainNavBar() {
  return (
    <div>
        <ul className='navbar'>
        <li className='logo'><Link to="/home" className='logo-link'>LeavePilot</Link></li>
        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li> <Link to ="/contact">Contact us</Link>&nbsp;&nbsp;&nbsp;</li>
        </ul>

        <Routes>

            <Route path="/" element={<Home/>} exact/>
            <Route path="/home" element={<Home/>} exact/>
            <Route path="/about" element={<About/>} exact/>
            <Route path="/login" element={<Login/>} exact/>
            <Route path="/contact"element={<Contact/>} exact/>

        </Routes>



    </div>
  )
}
