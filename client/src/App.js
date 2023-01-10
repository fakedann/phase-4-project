import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import LogOrSign from './LogOrSign';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/log-or-sign" element={<LogOrSign />}/>
      </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;
