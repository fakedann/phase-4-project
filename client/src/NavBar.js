import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
  return (
    <nav className="nav">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/new-review">New Review</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/restaurants">Restaurants</Link>
      </ul>
    </nav>
  )
}

export default NavBar