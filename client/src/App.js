import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom"
import CreateReview from './CreateReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState, createContext, useContext } from "react";
import Login from './Login';
import Collection from './Collection';
import Restaurants from './Restaurants';

export const MyContext = createContext()

// const MyProvider = ({children}) => {
//   const [theme, setTheme] = useState('hola')
//   const value = {
//     theme,
//     setTheme
//   }

//   return <MyContext.Provider value={value}>{children}</MyContext.Provider>
// }

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('hola')
  const value = {
    theme,
    setTheme,
    user
  }
  

 
  useEffect(() => {
    // auto-login
    console.log(`en app ${theme}`)
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

  }, []);



  return (
    <MyContext.Provider value={value}>
      <div className="app">
        <Routes>
        <Route exact path="/" element={<Login user={user} onLogin={setUser} setUser={setUser}/>}/>
          <Route exact path="/new-review" element={<CreateReview user={user}/>}/>
          <Route exact path="/collection" element={<Collection user={user}/>}/>
          <Route exact path="/restaurants" element={<Restaurants user={user}/>}/>
        </Routes>
        <ToastContainer />
    </div>
  </MyContext.Provider>
  );
 
  }

export default React.memo(App);
