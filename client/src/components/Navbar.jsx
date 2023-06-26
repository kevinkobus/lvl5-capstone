import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
      <nav>
        <h1 className="nav-title">Golf Tracker</h1>
        <ul className="nav-links">
          <li className="link" onClick={()=> navigate("/home")}>Home</li>
          <li className="link" onClick={()=> navigate("/overview")}>Golfer Overview</li>
          <li className="link" onClick={()=> navigate("/courses")}>Courses</li>
        </ul>
      </nav> 
  )
}

export default Navbar