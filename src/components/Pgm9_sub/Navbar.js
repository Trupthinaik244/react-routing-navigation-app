import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Navbar.css";
function Navbar(){
    return(
        <nav className="Navbar">
            <NavLink to="/" className="nav-link" activeClassname="active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassname="active">about</NavLink>
            <NavLink to="/contact" className="nav-link" activeClassname="active">contact</NavLink>
        </nav>
    );
}
export default Navbar;