import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(){

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    address: '',
    role: '',
  });

  const notvalid = () => toast("One of your fields has at least one invalid character. Please, try again.", {position: toast.POSITION.TOP_CENTER})

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
    const letters = /^[A-Za-z ]+$/
    const address = /^[a-zA-Z 0-9_.-]*$/
    const phone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    const positions = ['server', 'host', 'cook']

    if(letters.test(formData.fullname) && address.test(formData.address) && phone.test(formData.phone) && positions.find( element => element === formData.role)){
      
      handleSubmit()
    }else{
      
      notvalid()
    }

  }

  function handleSubmit() {
  
    console.log(formData);
  }

  return (
    <div className="mainBox">
      <h1 className="title">Welcome tofreelancing</h1>
      <h3>In here, you can become a part of our Restaurant community that provides flexible hours and competitive rates. If you are not part of the family yet, sign up below!</h3>
      <div id="aboutBox">
        
          <form onSubmit={checkSubmit}>
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
            <div className="formElement">
              <label>Role:</label>
              <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                  <option>---</option>
                  <option value="server">Server</option>
                  <option value="cook">Cook</option>
              </select>
            </div>
            <button id="submit" type="submit">Submit</button>
          </form>
      </div>
    </div>  
  )

}

export default Home