import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom"
import Home from './Home';
import LogOrSign from './LogOrSign';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/log-or-sign" element={<LogOrSign />}/>
    </Routes>
  );
}

export default App;
