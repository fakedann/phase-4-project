import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import CreateReview from './CreateReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import Login from './Login';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState(null);
  console.log(user)

 

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });

  }, []);

  if (!user) return <Login user={user} onLogin={setUser} setUser={setUser}/>

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home user={user} setUser={setUser}/>}/>
        <Route exact path="/review" element={<CreateReview user={user}/>}/>
        <Route exact path="/profile" element={<Profile user={user} setUser={setUser} />}/>
      </Routes>
      <ToastContainer />
  </div>
  );
 
  }

export default App;
