import React, { useEffect, useState } from "react";

function Home(){

  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="mainBox">
      <h1 className="title">Welcome tofreelancing</h1>
      <h3>If you haven't joined our amazing team, please sign up down below</h3>
      <div id="aboutBox">
        
          <form onSubmit={handleSubmit}>
            <div className="formElement">
              <label>Name:</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            
            <div className="formElement">
              <label>Phone:</label>
              <input
                type="text"
                name="lasttName"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
            <button id="submit" type="submit">Submit</button>
          </form>

      
       
      </div>
    </div>  
  )

}

export default Home