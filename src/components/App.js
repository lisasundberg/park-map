import React, { Component } from 'react';
// import logo from './../logo.svg';
import Header from './Header';
import Map from './Map';
import './../css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Map />
      </div>
    );
  }
}

export default App;
