import React from 'react';

function SearchSuggestion(props){
  return(
    <div className="searchSuggestion" id={props.id}>
      <h3>{ props.parkName } <span>({props.parkSmekName})</span></h3>
      <div className="features">
        <small className="features">{ props.features }</small>
      </div>
    </div>
  );
}

export default SearchSuggestion;
