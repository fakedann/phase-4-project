import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Routes} from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
