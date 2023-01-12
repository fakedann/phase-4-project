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

  return (
    <div>
      <p>hi you are home {user.fullname}</p>
      <button variant="outline" onClick={handleLogoutClick}>
          Logout
      </button>
    </div>
    
  )

}

export default Home