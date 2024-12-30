
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css'
import First from './First.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import firstImage from './first.jpg';

function App() {


  return (
    <>
      <Router>
        <nav>
          <Link to="/">
          <img class="first" src={firstImage} alt="First page"></img></Link>
            <ol style={{ listStyleType:"none" }}>
            <li class="abc"><Link to ="/">WebTech</Link></li>
            <li class="item"><Link to ="/home">Home</Link></li>
            <li class="item"><Link to ="/about">About Us</Link></li>
            <li class="item"><Link to ="/contact">Contact Us</Link></li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>

      <footer class="foot">
        <p>Copyright &copy;2024; Designed by PRADEEPPA </p>
      </footer>
    </>
  ) 
}

export default App


