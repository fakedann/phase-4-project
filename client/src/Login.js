import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ user, onLogin, setUser}) {

  const [showLogin, setShowLogin] = useState(true);
  

  if (user) return (
    <div className="welcomeDiv">
      <h2>WELCOME</h2>
      <div className="card-container">
        <h3>{user.fullname}</h3>
        <h6>{user.email}</h6>
        <p>{user.address}</p>
        <div className="buttons">
          <button className="primary" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    
      <div className="mainBox">
          {showLogin ? (
          <>
            <p>If you already have an account, please sign in.</p>
            <LoginForm onLogin={onLogin} />
            <p className="bottomP">
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin}/>
            <p className="bottomP">
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </div>
      
   
  );
}


export default Login;