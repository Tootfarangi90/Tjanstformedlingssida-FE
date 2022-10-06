import './App.css';
import { useState } from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//Routes
import Tjänster from './routes/tjänster/Tjänster';
import Allcategories from './routes/categories/Allcategories';
import Dashboard from './routes/dashboard/dashboard';
import Register from './routes/login-register/Register';
import Login from './routes/login-register/Login';
import Categories from './routes/categories/Categories';


// Components
import HeaderImg from './components/header-image/HeaderImg';
import Home from "./components/home/Home";
import { CarouselData } from './components/home/CarouselData';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/footer";
import Kontakt from './components/footer/Kontakt';

function App() {
const token = localStorage.getItem('accessToken')
const [useToken, setuseToken] = useState(token)

  return (
    <div className="App">
      <Navbar auth={useToken} />
      <HeaderImg auth={useToken}/>
            <Routes>
              <Route path="/" element={<Home slides={CarouselData} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/kontakt" element={<Kontakt />} />
              {!useToken && (
                <Route path="/login" element={<Login auth={() => setuseToken(true)}/>} /> 
              )}
              {useToken && (
                <Route path="/dashboard" element={<Dashboard logout={() => setuseToken(false)}/>} /> 
              )}
              <Route path="/dashboard" element={<Navigate to={token ? "/dashboard" : "/login"}/>} />
              <Route path="/allcategories" element={<Allcategories />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/services" element={<Tjänster />} />

              <Route path="/advertisement" element={<Tjänster />} />
              
            </Routes>
          
    <Footer />
    </div>
  );
}

export default App;
