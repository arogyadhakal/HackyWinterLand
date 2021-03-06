
import React from 'react'
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import FunctionClick from './components/FunctionClickComponent';

import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Create from './components/ZipCodeComponent';
import Category from './components/CategoryComponent';
import ButtonClick from './components/ButtonClickComponent';



function App() {
  return (
    <Router>
    <div className="App">
    </div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
      </Router>
    )
}



export default App;