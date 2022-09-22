import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './routes/login-register/Login';
import Register from './routes/login-register/Register';
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { CarouselData } from './components/home/CarouselData';








function App() {
  return (
    <div className="App">
    <Header title='Header'/>

    <Router>
     <Link to="/login" />
      <div>
        <h1>This is the not router</h1>
        <Routes >
          <Route path="/" element={<Home slides={CarouselData} />} />
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
