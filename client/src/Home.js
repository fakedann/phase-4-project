import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home({user, setUser}){

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  console.log(user)

  // user.reviews.map( (review) => {})

  return (
    <div>
      <p>hi you are home {user.fullname}</p>
      <div className="home">
        <div className="card">
          <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer Architect & Engineer Architect & EngineerArchitect & EngineerArchitect & EngineerArchitect & EngineerArchitect & EngineerArchitect & EngineerArchitect & EngineerArchitect & Engineer</p>
          </div>
          <div className="card-container">
	<h3>Ricky Park</h3>
	<h6>New York</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div className="buttons">
		<button className="primary">
			Message
		</button>
		<button className="primary ghost">
			Following
		</button>
	</div>
</div>
      </div>
      
      </div>
      <button variant="outline" onClick={handleLogoutClick}>
          Logout
      </button>
    </div>
    
  )

}

export default Home