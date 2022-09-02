import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import Footer from "./components/footer/footer"
import Header from "./components/header/Header"





const Home = () => {
  return(
    <div className='home-component'>
      <h1>Tillfällig Home component</h1>
      <p>Byt ut den sen</p>
    </div>
  )
}


function App() {
  return (
    <div className="App">
    <Header />

    <Router>
     <Link to="/login" />
      <div>
        <h1>This is the router</h1>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
<Footer />
    </div>
  );
}

export default App;
