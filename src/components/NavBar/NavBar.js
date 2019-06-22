import React from "react";
import "./style.css";


function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <span className="navbar-brand mb-0 white">React Clicky Game</span>
      <span className="nav-item navbar-text mb-0 h3 white">Click an image to begin</span>
      <span className="nav-item navbar-text score mb-0 h2 white" id="currentScore">Your Score: {props.currentScore}</span>
      <span className="nav-item navbar-text score mb-0 h2 white" id="topScore">| Top Score: {props.topScore}</span>
    </nav>
  );
}

export default NavBar;
