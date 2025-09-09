import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import OnlineForm from './pages/OnlineForm';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/colyer-law-react/" element={<Home />} />
        <Route path="/colyer-law-react/about" element={<About />} />
        <Route path="/colyer-law-react/services" element={<Services />} />
        <Route path="/colyer-law-react/contact" element={<Contact />} />
        <Route path="/colyer-law-react/online-form" element={<OnlineForm />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
