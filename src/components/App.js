import React, { Component } from 'react';
// import logo from './../logo.svg';
import Header from './Header';
import Map from './Map';
import FilterBox from './FilterBox';
import './../css/style.css';

class App extends Component {

  state = {
    filterBoxClassName: ''
  }

  openFilter = () => {
    this.setState({
      filterBoxClassName: 'visible'
    });
  }

  closeFilterBox = () => {
    this.setState({ filterBoxClassName: '' });
    setTimeout(() => {
      this.setState({ filterBoxClassName: 'hidden' });
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <Header onClick={ this.openFilter } />

        <FilterBox
          getDivStyle={ this.closeFilterBox }
          className={ this.state.filterBoxClassName } />
        <Map />
      </div>
    );
  }
}

export default App;
