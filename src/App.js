import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi Mithesh</h2>
        </div>
        <p className="App-intro">
          To play edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
