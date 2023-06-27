import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  // const navigate = useNavigate()

  return (
      <nav className="nav-container">
        <h1 className="nav-title">Golf Tracker</h1>
        {/* <ul className="nav-links">
          <li className="link" onClick={()=> navigate("/home")}>Home</li>
          <li className="link" onClick={()=> navigate("/golferProfile")}>Golfer Profile</li>
          <li className="link" onClick={()=> navigate("/courseProfiles")}>Course Profiles</li>
        </ul> */}
      </nav> 
  )
}

export default Navbar