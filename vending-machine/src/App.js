import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Machine from './Vending/Machine.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Machine/>
      </div>
    );
  }
}

export default App;
