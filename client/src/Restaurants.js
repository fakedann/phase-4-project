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
    fetch("/restaurants").then((r) => {
      if (r.ok) {
        r.json().then((rests) => setRestaurants(rests));
      }else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }, [switchPage])

  useEffect( () => {
    
    if(filterReviews === 'all'){
      fetch(`/reviews_rest/${selectedRest}`).then((r) => {
        if (r.ok) {
          r.json().then((rests) => setReviews(rests));
        }else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }else{
      fetch(`/reviews/${selectedRest}/${filterReviews}`).then((r) => {
        if (r.ok) {
          r.json().then((rests) => setReviews(rests));
        }else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    setContact([])
  
}, [filterReviews, selectedRest])

  if (!user) return <p className="loginp">Please, log in first in the home page.</p>

  if (switchPage === "form") return <RestaurantForm setSwitch={setSwitch}/>

  function handleChange(){
    setSwitch('form')
  }

  function contactInfo(){
    const arr = []
    let rest = restaurants.find( restObj => restObj.id === parseInt(selectedRest))
    if(rest){
      rest.employees.map( emplObj => {
        if(reviews.find( reviewObj => reviewObj.employee_id === emplObj.id)){
          arr.push(`${emplObj.fullname}: ${emplObj.email}`)
        }
        return emplObj
      })
      const final = [...new Set(arr)];
      setContact(final)
    }
  
  }


  return (
    <div>
      {switchPage === "" ? <div>
      <button id="restForm" onClick={handleChange}>Add a New Restaurant</button>
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
        <button onClick={contactInfo}>Show Reviewer's Contact Info</button>
        {errors} 
    </div>
      <div id="contactDiv">{contact.map( obj => <p className="contactP" key={obj}>{obj}</p>)}</div>
      </div>: <div className="successDiv">
      <p>New Restaurant submmited succesfully!</p>
      <button onClick={ () => setSwitch('')}>Go back</button>
      </div> }
    </div>
  )
}

export default Restaurants