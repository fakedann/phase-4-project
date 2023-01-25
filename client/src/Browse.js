import React, { useEffect, useState } from "react";

function Browse({changeView, user}){

  const [filterReviews, setFilter] = useState('1')
  const [reviews, setReviews] = useState([])

  useEffect( () => {
    
    if(filterReviews === '1'){
      fetch(`/reviews/5/${user.id}`).then((r) => {
        if (r.ok) {
          r.json().then((rests) => setReviews(rests));
        }
      });
    }else if(filterReviews === "all"){
      fetch(`/reviews/${user.id}`).then((r) => {
        if (r.ok) {
          r.json().then((rests) => setReviews(rests));
        }
      });
    }else{
      fetch(`/reviews/${user.id}/${filterReviews}`).then((r) => {
        if (r.ok) {
          r.json().then((rests) => setReviews(rests));
        }
      });
    }
  
}, [filterReviews])

  function handleChange(event){

    let review = reviews.find( (reviewObj) => reviewObj.id === parseInt(event.target.className))
  
    if(event.target.innerText === "Change"){
      changeView('update', review)
    }else{
      changeView('delete', review)
    }
  }

  // function showAll(){
  //   fetch(`/reviews/${user.id}`).then((r) => {
  //     if (r.ok) {
  //       r.json().then((rests) => setReviews(rests));
  //     }
  //   });
  // }

  return (
    <div>
    <div className="profileDiv">
      <button onClick={ () => setFilter('all')}>Show All</button>
      <button onClick={ () => setFilter('1')}>Show Last Five</button>
      <label>Filter By:</label>
      <select value={filterReviews} onChange={ e => setFilter(e.target.value)}>
          <option value="1">---</option>
          <option value="3">Low Rates (1-2)</option>
          <option value="4">Medium Rates (3)</option>
          <option value="6">High Rates (4-5)</option>
        </select>
        <div className="cardContainers">
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
  </div> 
  )
}

export default Browse