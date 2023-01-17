import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ user, onLogin, setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  if (user) return <div><p id="welcome">Welcome to Freelancing, {user.fullname}! We hope you enjoy all of the opportunities we offer</p><button variant="outline" onClick={handleLogoutClick}>
  Logout
</button></div>;

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