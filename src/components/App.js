import React, { Component } from 'react';
// import logo from './../logo.svg';
import Map from './Map';
import './../css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Park-kartan</h1>
        </header>
        <Map />
      </div>
    );
  }
}

export default App;
