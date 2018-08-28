import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar"
import Main from "./assets/main.jpg"
import Jumbotron from "./Components/Jumbotron"

class App extends Component {
  render() {
    return (
      <div className="landing">
      <Navbar />
      <Jumbotron/>
      </div>
    );
  }
}

export default App;
