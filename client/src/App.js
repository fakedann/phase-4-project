import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import LogOrSign from './LogOrSign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import Login from './Login';
import SignUpForm from './SignUpForm';

function App() {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<LogOrSign user={user} setUser={setUser}/>}/>
        <Route exact path="/log-or-sign" element={<LogOrSign setUser={setUser}/>}/>
      </Routes>
      <ToastContainer />
  </div>
  );
  

    

 
  }

export default App;
