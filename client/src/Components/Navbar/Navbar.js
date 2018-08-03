import React, { Component } from 'react';
import "./Navbar.css";
import Logo from "../../assets/Logo.jpg"


class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
        <div className ="container-fluid">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Photos <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Suits</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
            </ul>
            <a className="navbar-brand" href="#"><img src={Logo} alt=""/></a>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Dinning menu <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Direction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
       
    )
  }

}
export default Navbar;