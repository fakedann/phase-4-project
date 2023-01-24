import React, { useEffect, useState } from "react";
import Browse from "./Browse";
import DeleteReview from "./DeleteReview";
import UpdateReview from "./UpdateReview";

function Discover({user}){

  const [filterPageView, setNewFilter] = useState(<Browse user={user} changeView={changeView}/>)
  console.log(`discover user ${user}`)

  
  function changeView(typeOfChange, review){
    if(typeOfChange === "update"){
      setNewFilter(<UpdateReview user={user} review={review} changeView={changeView}/>)
    }else if(typeOfChange === "delete"){
      setNewFilter(<DeleteReview user={user} review={review} changeView={changeView}/>)
    }else{
      setNewFilter(<Browse user={user} changeView={changeView}/>)
    }
  }

  return(
    <div>
      {user !== null ? filterPageView: <p>Please, log ing first</p>}
    </div>
  )
}

export default Discover