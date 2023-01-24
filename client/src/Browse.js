import React, { useEffect, useState } from "react";

function Browse({changeView, user}){

  const [reviews, setReviews] = useState([])

  useEffect( () => {
    console.log('we start fetch in browse')
    fetch(`/reviews/5/${user.id}`).then((r) => {
      if (r.ok) {
        r.json().then((rests) => setReviews(rests));
      }
    });
  
}, [user])
console.log('indie browse')
console.log(reviews)
console.log(user)

  function handleChange(event){
    console.log(event.target.className)
    console.log(event.target.innerText)
    let review = reviews.find( (reviewObj) => reviewObj.id === parseInt(event.target.className))
  
    if(event.target.innerText === "Change"){
      changeView('update', review)
    }else{
      changeView('delete', review)
    }
  
  }

  return (
    <div>
    <p>inside Browse</p>
    <div className="profileDiv">
      <button onClick={handleChange}>Last 5 Reviews</button>
      <button onClick={event => changeView('update')}>Change A Review</button>
      <button>Delete A Review</button>
      <h3></h3>
      {reviews.map( (reviewObj) => <div key={reviewObj.id} className="card">
          <div className="container">
            <h4><b>{reviewObj.restaurant.name}</b></h4>
            <h6>Rate: {reviewObj.rate}</h6>
            <p>- {reviewObj.comments}</p>
            <button className={reviewObj.id} onClick={handleChange}>Change</button>
            <button className={reviewObj.id} onClick={handleChange}>Delete</button>
          </div>
          </div>)}
    </div>
  </div> 
  )
}

export default Browse