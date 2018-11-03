import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import nails from './nails.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={nails} className="App-nails" alt="nails"/> */}
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hello, I'm Debbie!
          </h1>
          <p>
            Welcome to my personal website.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
