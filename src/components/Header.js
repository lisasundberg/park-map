import React from 'react';

function Header(props){
  return(
    <header className="App-header">
      <h1 className="App-title">Park-kartan</h1>
      <input type="text" className="searchInput" placeholder="sök" onFocus={ props.onClick }></input>
    </header>
  );
}

export default Header;
