import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
  return (
    <nav className="nav">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/log-or-sign">Log In or Sign Up</Link>
      </ul>
    </nav>
  )
}

export default NavBar