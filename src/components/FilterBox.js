

import React from 'react';
import Cross from './../images/cross.svg';
import FilterOption from './FilterOption';

function FilterBox(props){
  function closeFilterBox(){
    props.getDivStyle();
  }

  return (
    <div className={`filterBox ${props.className}`}>

      <button onClick={ closeFilterBox } className="close">
        <img src={ Cross } alt="Close"/>
      </button>

      <h4>Filter</h4>
      <div className="filterBoxes">
        <FilterOption
          name="bbq"
        />
        <FilterOption
          name="swim"
        />
        <FilterOption
          name="gym"
        />
        <FilterOption
          name="booze"
        />
        <FilterOption
          name="bad"
        />
        <FilterOption
          name="bad"
        />
        <FilterOption
          name="bad"
        />
        <FilterOption
          name="bad"
        />
        <FilterOption
          name="bad"
        />

      </div>
      <button onClick={ closeFilterBox } className="okSearch">
        Filter
      </button>
    </div>

  )
}

export default FilterBox;
