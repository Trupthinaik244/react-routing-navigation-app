import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../components/Pgm9_sub/Home';
import About from '../components/Pgm9_sub/About';
import Contact from '../components/Pgm9_sub/Contact';
import Navbar from'../components/Pgm9_sub/Navbar';
function Pgm9() {
    return (
        <Router>
            <Navbar />
            <div style={{padding:"20px"}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
        </Router>
    );
}
export default Pgm9;