import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import LogOrSign from './LogOrSign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  console.log(user)
  console.log(restaurants)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/restaurants").then((r) => {
      if (r.ok) {
        r.json().then((rests) => setRestaurants(rests));
      }
    });
  }, []);


  if (!user) return <Login onLogin={setUser} restaurants={restaurants}/>;

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home user={user} setUser={setUser}/>}/>
        <Route exact path="/log-or-sign" element={<LogOrSign setUser={setUser}/>}/>
      </Routes>
      <ToastContainer />
  </div>
  );
  

    

 
  }

export default App;
