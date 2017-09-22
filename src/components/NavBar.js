import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../logo.svg'

class NavBar extends Component {
  render() {
    return (
      <div className="navBar-title">
      {logo} alt="icon"/>
      <h1>An Awesome Play List!</h1>
      </div>
    )
  }
}

export default NavBar;
