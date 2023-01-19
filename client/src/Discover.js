import React, { useEffect, useState } from "react";

function Discover({setUser, user}){

  const [reviews, setReviews] = useState([])
  const lastFiveReviews = []

  useEffect( () => {
    fetch(`/reviews/5/${user.id}`).then((r) => {
      if (r.ok) {
        r.json().then((rests) => setReviews(rests));
      }
    });
  }, [])

  // if(!user){
  //   return <p>Hola profile not logged in</p>
  // }else{
  //   // fetch(`/reviews/${user.id}`).then((r) => {
  //   //   if (r.ok) {
  //   //     r.json().then((resp) => setReviews(resp));
  //   //   }
  //   // });
  //   console.log('loop')
  // }

  // if(reviews.length >= 1){
  //   for(let i=reviews.length-1; i>reviews.length-6; i--){
  //     console.log(i)
  //     if(i>=0){
  //       lastFiveReviews.push(reviews[i])
  //     }
  //     else{
  //       break
  //     }
  //   }
  // }


  console.log(reviews)

  return(<div>
    <p>inside profile</p>
    <div className="profileDiv">
      {reviews.map( (reviewObj) => <div key={reviewObj.id} className="card">
          <div className="container">
            <h4><b>{reviewObj.restaurant.name}</b></h4>
            <p>{reviewObj.comments}</p>
          </div>
          </div>)}
    </div>
  </div>)
}

export default Discover