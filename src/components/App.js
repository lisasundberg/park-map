import React, { Component } from 'react';
// import logo from './../logo.svg';
import Header from './Header';
import Map from './Map';
import FilterBox from './FilterBox';
import './../css/style.css';

class App extends Component {

  state = {
    filterBoxClassName: '',
    searchSuggestionsVisible: false
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

  showSearchSuggestions = () => {
    this.setState({
      searchSuggestionsVisible: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header onFocus={ this.openFilter } onChange={ this.showSearchSuggestions } />

        <FilterBox
          getDivStyle={ this.closeFilterBox }
          className={ this.state.filterBoxClassName }
          visibility={this.state.searchSuggestionsVisible} />
        <Map />
      </div>
    );
  }
}

export default App;
