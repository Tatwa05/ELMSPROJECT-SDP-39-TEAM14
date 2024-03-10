// Navbar.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../main/style.css'
import EmpDashboard from './EmpDashboard';
//import App from '../App';
import ApplyLeave from './ApplyLeave';
import LeaveStatus from './LeaveStatus';
import Profile from './Profile';
import Login from '../main/Login';





export default function AdminNavBar() {
  return (
    <div>
        <ul className='navbar'>
        <li className='logo'><Link to="/home" className='logo-link'>LeavePilot</Link></li>      
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/applyleave">Apply Leave</Link></li>
        <li><Link to="/myleavestatus">My leave status</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li> <Link to ="/login">Logout</Link>&nbsp;&nbsp;&nbsp;</li>
        </ul>

        <Routes>

            <Route path="/" element={<EmpDashboard/>} exact/>
            <Route path="/dashboard" element={<EmpDashboard/>} exact></Route>
            <Route path="/applyleave" element={<ApplyLeave/>} exact/>
            <Route path="/myleavestatus" element={<LeaveStatus/>} exact/>
            <Route path="/profile" element={<Profile/>} exact/>
            <Route path="/login"element={<Login/>} exact/>

        </Routes>



    </div>
  );
}
