import React, { useState } from "react";

function RestaurantForm({setSwitch}){

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    foodtype: ''
  })
  const [errors, setErrors] = useState([]);


  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;
  
      setFormData({
        ...formData,
        [name]: value,
      });
  }

  function checkSubmit(event){
      event.preventDefault()
      const letters = /^[A-Za-z ']+$/
      const address = /^[a-zA-Z 0-9_.-]*$/
      const phone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  
      if(letters.test(formData.foodtype) && letters.test(formData.name) && address.test(formData.address) && phone.test(formData.phone) ){

        handleSubmit()
      }else{
        // notvalid()
        setErrors(["One of your fields has at least one invalid character. Please, try again."])
      }
  }

  function handleSubmit() {
      setErrors([]);
      fetch("/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((r) => {
        if (r.ok) {
          r.json().then( () => setSwitch('submitted') );
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (<div className="mainBox">
  <div id="aboutBox">
      <form onSubmit={checkSubmit}>
      <div className="formElement">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="formElement">
          <label>Food type:</label>
          <input
            type="text"
            name="foodtype"
            onChange={handleChange}
            value={formData.foodtype}
          />
        </div>
        <div className="formElement">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <div className="formElement">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <button id="submit" type="submit">Submit</button>
        <button onClick={() => setSwitch('')}>Cancel Creation</button>
        <div>{errors.map((err) => (
          <p key={err}>{err}</p>
        ))}</div>
      </form>
  </div>
</div> )
}

export default RestaurantForm