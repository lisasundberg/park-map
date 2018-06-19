import React from 'react';
import Search from './../images/search.svg';
function Header(props){
  return(
    <header className="App-header">
      <h1 className="App-title">Park-kartan</h1>
      <div id="filterOutputBox"></div>
      <input type="text"
             className="searchInput"
             onFocus={ props.onFocus }
             onChange={ props.onChange }>
      </input>
      <img src={ Search } alt="Search" className="search"/>
    </header>
  );
}

export default Header;
