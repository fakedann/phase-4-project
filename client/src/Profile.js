import React, { useEffect, useState } from "react";

function Profile({setUser, user}){

  const [reviews, setReviews] = useState([])
  const lastFiveReviews = []

  useEffect( () => {
    fetch(`/reviews/${user.id}`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setReviews(resp));
      }
    });
  }, [])

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  if(reviews.length > 1){
    for(let i=reviews.length-1; i>reviews.length-6; i--){
      lastFiveReviews.push(reviews[i])
    }
  }


  console.log(lastFiveReviews)

  return(<div>
    <p>inside profile</p>
    <div className="profileDiv">
      {lastFiveReviews.map( (reviewObj) => <div className="card">
          <div className="container">
            <h4><b>{reviewObj.restaurant.name}</b></h4>
            <p>{reviewObj.comments}</p>
          </div>
          </div>)}
    </div>
    <button variant="outline" onClick={handleLogoutClick}>
          Logout
      </button>
  </div>)
}

export default Profile