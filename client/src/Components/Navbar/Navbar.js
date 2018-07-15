import React from "react";
import "./Navbar.css";


const Navbar = props => 

<div className="nav-wrapper">
<nav>
  <a  href="/"><img id="logo" src=''></img></a>
  <ul id="nav-mobile" className="hide-on-med-and-down">
    <li><a className="navText" href="#">Photo</a></li>
    <li><a className="navText" href="#">Directions</a></li>
    <li><a className="navText" href="#">Whats Happening</a></li>
    <li><a className="navText" href="#">Blog</a></li>
  </ul>
  </nav>
</div>


export default Navbar;