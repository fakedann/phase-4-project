import React, { useEffect, useState } from "react";

function Browse({changeView, user}){

  const [reviews, setReviews] = useState([])

  useEffect( () => {
    
    fetch(`/reviews`).then((r) => {
      if (r.ok) {
        r.json().then((rests) => setReviews(rests));
      }
    });
  
}, [])
console.log('indie browse')
console.log(reviews)
console.log(user)

  function handleChange(event){
    console.log(typeof parseInt(event.target.id))
    let found = reviews.find( (reviewObj) => reviewObj.id === parseInt(event.target.id))
    changeView(found)
  
  }

  return (
    <div>
    <p>inside Browse</p>
    <div className="profileDiv">
      <button>Last 5 Reviews</button>
      <button></button>
      <button></button>
      {reviews.map( (reviewObj) => <div key={reviewObj.id} className="card">
          <div className="container">
            <h4><b>{reviewObj.restaurant.name}</b></h4>
            <h6>By: {reviewObj.employee.fullname}</h6>
            <h6>Rate: {reviewObj.rate}</h6>
            <p>- {reviewObj.comments}</p>
            {reviewObj.employee.id === user.id ? <button id={reviewObj.id} onClick={handleChange}>Change</button>: null}
          </div>
          </div>)}
    </div>
  </div> 
  )
}

export default Browse