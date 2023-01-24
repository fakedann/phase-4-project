import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
  console.log('we are touching navbar')
  return (
    <nav className="nav">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/discover">Discover</Link>
      </ul>
    </nav>
  )
}

export default NavBar