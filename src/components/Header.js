import React from 'react';

function Header(props){
  return(
    <header className="App-header">
      <h1 className="App-title">Park-kartan</h1>
      <div id="filterOutputBox"></div>
      <input type="text"
             className="searchInput"
             placeholder="sök"
             onFocus={ props.onFocus }
             onChange={ props.onChange }>
      </input>
    </header>
  );
}

export default Header;
