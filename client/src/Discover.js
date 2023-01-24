import React, { useState } from "react";
import Browse from "./Browse";
import DeleteReview from "./DeleteReview";
import UpdateReview from "./UpdateReview";

function Discover( {user} ){
  
  const [filterPageView, setNewFilter] = useState('')
  const [review, setReview] = useState([])
  console.log(user)

  if(filterPageView === "update"){
    return <div><UpdateReview user={user} review={review} changeView={changeView}/></div>
  }else if (filterPageView === "delete"){
    return <DeleteReview user={user} review={review} changeView={changeView}/>
  }else{
    return(
      <div>
        {user !== null ? <Browse user={user} changeView={changeView}/>: <p>Please, log ing first</p>}
      </div>
    )
  }
  
  function changeView(typeOfChange, newReview){
    setNewFilter(typeOfChange)
    setReview(newReview)
  }

 
}

export default Discover