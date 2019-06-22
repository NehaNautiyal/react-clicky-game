import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0">React Clicky Game</span>
      <span className="nav-item navbar-text mb-0 h3">Click an image to begin</span>
      <span className="nav-item navbar-text score mb-0 h2" id="currentScore">Your Score: {props.currentScore}</span>
      <span className="nav-item navbar-text score mb-0 h2" id="topScore">| Top Score: {props.topScore}</span>
    </nav>
  );
}

export default NavBar;
