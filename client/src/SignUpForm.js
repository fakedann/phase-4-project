import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

function SignUpForm({ onLogin}){

    const [formData, setFormData] = useState({
      email: '',
      password: '',
      fullname: '',
      phone: '',
      address: ''
    });
    const [errors, setErrors] = useState([]);
  
    // const notvalid = () => toast("One of your fields has at least one invalid character. Passwords must be at least 6 characters long. Please, try again.", {position: toast.POSITION.TOP_CENTER})
  
    function handleChange(event) {
      const name = event.target.name;
      let value = event.target.value;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    function checkSubmit(event){
      event.preventDefault()
      const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const letters = /^[A-Za-z ]+$/
      const address = /^[a-zA-Z 0-9_.-]*$/
      const phone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  
      if(email.test(formData.email) && formData.password.length > 5 &&letters.test(formData.fullname) && address.test(formData.address) && phone.test(formData.phone) ){

        handleSubmit()
      }else{
        // notvalid()
        setErrors(["One of your fields has at least one invalid character. Please, try again."])
      }
    }
  
    function handleSubmit() {
      setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user) );
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    }
  
    return (
      <div className="mainBox">
        <div id="aboutBox">
            <form onSubmit={checkSubmit}>
            <div className="formElement">
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="formElement">
                <label>Password (+5):</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <div className="formElement">
                <label>Name:</label>
                <input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  value={formData.fullname}
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
              <div>{errors.map((err) => (
                <p key={err}>{err}</p>
              ))}</div>
            </form>
        </div>
      </div>  
    )
  }

export default SignUpForm;