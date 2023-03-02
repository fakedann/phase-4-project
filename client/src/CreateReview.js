import React, { useEffect, useState, useContext } from "react";
import {MyContext} from "./App"

function CreateReview(  ){

  const [review, setReview] = useState({
    restaurant: '',
    rate: '',
    comments: '',
  });
  const [avat, setAvat] = useState(null)
  const [img, setImg] = useState()
  const [submitted, setSubmit] = useState(false)
  const [errors, setErrors] = useState([]);
  const [restaurants, setRestaurants] = useState([]);


  const {theme, setTheme, user} = useContext(MyContext)
  setTheme('chao')
  console.log(`succesful user ${user.fullname}`)

  useEffect( () => {
    fetch("/restaurants").then((r) => {
      if (r.ok) {
        r.json().then((rests) => setRestaurants(rests));
      }
    });
  }, [])

  if (!user) return <p className="loginp">Please, log in first in the home page.</p>

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append("review[image]", avat)
    formData.append("review[employee_id]", user.id)
    formData.append("review[restaurant_id]", review.restaurant)
    formData.append("review[rate]", review.rate)
    formData.append("review[comments]", review.comments)

    fetch("/review", {
      method: "POST",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        r.json().then( () => setSubmit(true));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleBlob(){
    console.log('blob')
    fetch("/last").then((r) => {
      if (r.ok) {
        r.json().then( resp => {
          setImg(resp.image_url)
        });
      }
    });
  }


  return (
    <div>
      {submitted ? <div className="successDiv">
<p>Review submmited succesfully!</p>
<button onClick={ () => setSubmit(false)}>Go back</button>
</div> : <div id="reviewDiv">
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
              <div className="formElement">
                <label>Image:</label>
                <input
                  type="file"
                  name="image"
                  onChange={e => setAvat(e.target.files[0])}
                />
              </div>
              <button id="submitReview" type="submit">Submit</button>
              <div >{errors.map((err) => (
                <p key={err}>{err}</p>
              ))}</div>
            </form>
            <img id="testImg" src={img} alt="waiting for something"/>
            <button onClick={handleBlob}>Check last</button>
    </div>}
    </div>
    
  )

}

export default CreateReview