import React, { useEffect, useState } from "react";

function LogOrSign({setUser, user}){

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <p>hola hola log in</p>
      <p>hola {user.fullname}</p>
      <button variant="outline" onClick={handleLogoutClick}>
          Logout
      </button>
    </div>
    
  )

}

export default LogOrSign