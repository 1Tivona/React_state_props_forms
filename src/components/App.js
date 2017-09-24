import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
        <NavBar />
          <div className="playlist">
          <PlayList />
            <div className="playlist-form">
            <PlayListForm />
            </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
