import React from 'react';
import { Sunny } from './../images/sunny.svg';

function SearchSuggestion(props){
  return(
    <div className="searchSuggestion">
      <h3>{ props.parkName } <span>({props.parkSmekName})</span></h3>
      <div className="features">
        <small className="features">{ props.features }</small>
      </div>
    </div>
  );
}

export default SearchSuggestion;
