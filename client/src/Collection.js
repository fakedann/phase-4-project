import React, { useState, useContext } from "react";
import Browse from "./Browse";
import DeleteReview from "./DeleteReview";
import UpdateReview from "./UpdateReview";
import {MyContext} from "./App"

function Collection( {user} ){
  
  const [filterPageView, setNewFilter] = useState('')
  const [review, setReview] = useState([])

  const {theme, setTheme} = useContext(MyContext)
  console.log(`we are in collection ${theme}`)
  setTheme('collection')

  if(filterPageView === "update"){
    return <div><UpdateReview review={review} changeView={changeView}/></div>
  }else if (filterPageView === "delete"){
    return <DeleteReview review={review} changeView={changeView}/>
  }else{
    return(
      <div>
        {user !== null ? <Browse user={user} changeView={changeView}/>: <p className="loginp">Please, log in first in the home page.</p>}
      </div>
    )
  }
  
  function changeView(typeOfChange, newReview){
    setNewFilter(typeOfChange)
    setReview(newReview)
  }

 
}

export default Collection