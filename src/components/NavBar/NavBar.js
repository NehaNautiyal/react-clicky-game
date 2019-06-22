import React from "react";
import "./style.css";


function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-dark">
      <span className="navbar-brand mb-0 text-light">React Clicky Game</span>
      <span className="nav-item navbar-text mb-0 h3 text-light">Click an image to begin</span>
      <span className="nav-item navbar-text score mb-0 h2 text-light" id="currentScore">Your Score: {props.currentScore} | Top Score: {props.topScore}</span>
    </nav>
  );
}

export default NavBar;
