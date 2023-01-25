import React, { useState } from "react";

function DeleteReview({review, changeView}){

  const [deleted, setDeleted] = useState(false)

  function handleDelete() {
    fetch(`/review/${review.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setDeleted(true)
      }
    });
  }

  return(<div>
      <h2 id="deleteH2">Confirm Delete Operation</h2>
    {deleted ? <div className="successDiv">
<p className="loginp">Succesful delete!</p>
<button onClick={ () => changeView('')}>Go back</button>
</div>: <div className="cardUp">
          <div className="container">
            <h4><b>{review.restaurant.name}</b></h4>
            <h6>Rate: {review.rate}</h6>
            <p>- {review.comments}</p>
            <button onClick={handleDelete}>Confirm Delete</button>
            <button onClick={ () => changeView('')}>Cancel Delete</button>
          </div>
      </div>}
  </div>)
}

export default DeleteReview