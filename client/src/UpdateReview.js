import React, { useEffect, useState } from "react";

function UpdateReview({review, user, changeView}){

  const [formData, setForm] = useState({
    rate: '',
    comments: ''
  })
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false)
  console.log('inside update')
  console.log(review)

  function handleSubmit(event){
    event.preventDefault()
    if(parseInt(formData.rate) === review.rate && formData.comments === review.comments){
      setErrors(['The comment and rate submitted are the same as the ones already posted. Make sure to submit at least one new change.'])
    }else{
      console.log(formData)
      fetch(`/review/${review.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rate: formData.rate,
          comments: formData.comments,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((resp) => {
            // comeBack(resp)
            setSubmitted(true)
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
    
  }

  function comeBack(){
    changeView()
  }

  return (
    <div>
      {submitted ? <div>
<p>Succesful change!</p>
<button onClick={comeBack}>Go back</button>
</div> :<div id="updateDiv">
      <div className="cardUp">
          <div className="container">
            <h4><b>{review.restaurant.name}</b></h4>
            <h6>By: {review.employee.fullname}</h6>
            <h6>Rate: {review.rate}</h6>
            <p>- {review.comments}</p>
          </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formElement">
            <label>Rate:</label>
            <select value={formData.rate} onChange={e => setForm({...formData, rate: e.target.value})}>
              <option>---</option>
              <option value="1">1</option>
              <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="formElement">
              <label>New Comment:</label>
                <input
                  type="text"
                  name="comments"
                  onChange={e => setForm({...formData, comments: e.target.value})}
                  value={formData.comments}
                />
          </div>
              <button id="submitReview" type="submit">Submit</button>
              <div>{errors.map((err) => (
                <p key={err}>{err}</p>
              ))}</div>
      </form>
    </div>}
    </div>
  )

}

export default UpdateReview