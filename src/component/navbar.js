import React from "react";
import "../cssComponent/navbar.css";
import {Link} from "react-scroll";

function Navbar(){
    return(<div className="navbar-main-container">
        <div className="navbar-box">
           
            <ul className="navbar">
                <li><Link to="home"  smooth={true} offset={-20} duration={1200}>Home</Link></li>
                <li><Link to="about"  smooth={true} offset={50} duration={1200}>About us</Link></li>
                <li><Link to="Team"  smooth={true} offset={-120} duration={1200}>Teams</Link></li>
                <li><Link to="Product" smooth={true} offset={50} duration={1200}>Product</Link></li>
                <li>Services</li>
                <li>Career</li>
                <li>Contact Us</li>

            </ul>
        </div>
    </div>)
}

export default Navbar;