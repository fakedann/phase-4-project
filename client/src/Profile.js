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


  if(!user) return <p>Hola profile not logged in</p>
  console.log(user)
  console.log(reviews)

  if(reviews.length >= 1){
    for(let i=reviews.length-1; i>reviews.length-6; i--){
      console.log(i)
      if(i>=0){
        lastFiveReviews.push(reviews[i])
      }
      else{
        break
      }
    }
  }


  console.log(lastFiveReviews)

  return(<div>
    <p>inside profile</p>
    <div className="profileDiv">
      {lastFiveReviews.map( (reviewObj) => <div key={reviewObj.id} className="card">
          <div className="container">
            <h4><b>{reviewObj.restaurant.name}</b></h4>
            <p>{reviewObj.comments}</p>
          </div>
          </div>)}
    </div>
  </div>)
}

export default Profile