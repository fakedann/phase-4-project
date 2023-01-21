import React, { useEffect, useState } from "react";
import Browse from "./Browse";
import UpdateReview from "./UpdateReview";

function Discover({setUser, user}){

  const [filterPageView, setNewFilter] = useState(<Browse user={user} changeView={changeView}/>)

  
  function changeView(found){
    if(found){
      setNewFilter(<UpdateReview user={user} review={found} changeView={changeView}/>)
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