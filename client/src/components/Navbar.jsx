import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()

  return (
      <nav>
        <h1 className="nav-title">English Premier League</h1>
        <ul className="nav-links">
          <li className="link" onClick={()=> navigate("/table")}>Table</li>
          <li className="link" onClick={()=> navigate("/teams")}>Teams</li>
          <li className="link" onClick={()=> navigate("/rosters")}>Rosters</li>
        </ul>
      </nav> 
  )
}

export default Nav