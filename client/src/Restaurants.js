import React, { useEffect, useState } from "react";
import RestaurantForm from "./RestaurantForm";

function Restaurants({user}){

  const [restaurants, setRestaurants] = useState([]);
  const [errors, setErrors] = useState([]);
  const [switchPage, setSwitch] = useState('')
  const [reviews, setReviews] = useState([])
  const [filterReviews, setFilter] = useState('')
  const [selectedRest, setSelectedRest] = useState('')
  const [contact, setContact] = useState([])

  useEffect( () => {
    console.log('inside fetch')
    fetch("/restaurants").then((r) => {
      if (r.ok) {
        r.json().then((rests) => setRestaurants(rests));
      }
    });
  }, [switchPage])

  useEffect( () => {
    
    if(filterReviews === 'all'){
      fetch(`/reviews_rest/${selectedRest}`).then((r) => {
        if (r.ok) {
          r.json().then((rests) => setReviews(rests));
        }
      });
    }else{
      fetch(`/reviews/${selectedRest}/${filterReviews}`).then((r) => {
        if (r.ok) {
          r.json().then((rests) => setReviews(rests));
        }
      });
    }
  
}, [filterReviews, selectedRest])

  console.log(restaurants)
  console.log(selectedRest)
  console.log(reviews)
  

 

  if (!user) return <p className="loginp">Please, log in first in the home page.</p>

  if (switchPage === "form") return <RestaurantForm setSwitch={setSwitch}/>

  function handleChange(){
    setSwitch('form')
  }

  function contactInfo(){
    const arr = []
    let rest = restaurants.find( restObj => restObj.id === parseInt(selectedRest))
    console.log(rest)
    console.log(rest.employees)
    rest.employees.map( emplObj => arr.push(emplObj.email))
    const final = [...new Set(arr)];
    console.log(final)
    setContact(final)
  }


  return (
    <div>
      {switchPage === "" ? <div>
      <button onClick={handleChange}>Change to form</button>
      <button onClick={contactInfo}>show contact info</button> 
      <div className="profileDiv">
      <label>Restaurant:</label>
                <select id="restSelect" value={selectedRest} onChange={e => setSelectedRest(e.target.value)}>
                    <option>---</option>
                    {restaurants.map( rest => <option key={rest.id} value={rest.id}>{rest.name}</option>)}
                </select>
      <label>Filter By:</label>
      <select value={filterReviews} onChange={ e => setFilter(e.target.value)}>
          <option>---</option>
          <option value="all">All</option>
          <option value="3">Low Rates (1-2)</option>
          <option value="4">Medium Rates (3)</option>
          <option value="6">High Rates (4-5)</option>
        </select>
        <div className="cardContainers">
        {reviews.map( (reviewObj) => <div key={reviewObj.id} className="card">
          <div className="container">
            <h4><b>{reviewObj.restaurant.name}</b></h4>
            <h6>By: {reviewObj.employee.fullname}</h6>
            <h6>Rate: {reviewObj.rate}</h6>
            <p>- {reviewObj.comments}</p>
          </div>
          </div>)}
        </div>
    </div>
      {contact.map( obj => <p key={obj}>{obj}</p>)}
      </div>: <div className="successDiv">
      <p>Review submmited succesfully!</p>
      <button onClick={ () => setSwitch('')}>Go back</button>
      </div> }
    </div>
  )
}

export default Restaurants