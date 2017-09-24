import React, { Component } from 'react';
import '../styles/App.css';


class NavBar extends Component {
  render() {
    return (
      <div className="navBar-title">
        <img className="music-icon" src="https://i.pinimg.com/736x/4e/f4/36/4ef436d37fc2ec3a193105d668818c71--treble-clef-heart-tattoo-templates.jpg" alt="music note"/>
        <h1>An Awesome Play List!</h1>
      </div>
    )
  }
}

export default NavBar;
