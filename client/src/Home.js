import React, { useEffect, useState } from "react";

function Home(){

  return (
    <div className="home">
      <h1 className="title">Welcome to the New York Time's Best Seller Website!</h1>
      <h3>Dive into this week's best-seller list...</h3>
      <div id="books">
        <div id="book-list">
          <div className="book-item">
          </div>
        </div>
      </div>
    </div>  
  )

}

export default Home