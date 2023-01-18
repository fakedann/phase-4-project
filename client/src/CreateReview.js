import React, { useEffect, useState } from "react";

function CreateReview( {user} ){

  const [review, setReview] = useState({
    restaurant: '',
    rate: '',
    comments: '',
  });

  const [errors, setErrors] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect( () => {
    fetch("/restaurants").then((r) => {
      if (r.ok) {
        r.json().then((rests) => setRestaurants(rests));
      }
    });
  }, [])

  if (!user) return <p>Please log in first</p>

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({employee_id: user.id,
        restaurant_id: review.restaurant,
        rate: review.rate,
        comments: review.comments,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((resp) => console.log(resp));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div id="reviewDiv">
      <h3>Submit your review below:</h3>
      <form onSubmit={handleSubmit}>
              <div className="formElement">
                <label>Restaurant:</label>
                <select id="restSelect" value={review.restaurant} onChange={e => setReview({...review, restaurant: e.target.value})}>
                    <option>---</option>
                    {restaurants.map( rest => <option key={rest.id} value={rest.id}>{rest.name}</option>)}
                </select>
              </div>
              <div className="formElement">
                <label>Rate:</label>
                <select value={review.rate} onChange={e => setReview({...review, rate: e.target.value})}>
                    <option>---</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
              </div>
              <div className="formElement">
                <label>Comments:</label>
                <input
                  type="text"
                  name="comments"
                  onChange={e => setReview({...review, comments: e.target.value})}
                  value={review.comments}
                />
              </div>
              <button id="submitReview" type="submit">Submit</button>
              <div>{errors.map((err) => (
                <p key={err}>{err}</p>
              ))}</div>
            </form>
    </div>
    
  )

}

export default CreateReview