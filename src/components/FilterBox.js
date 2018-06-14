

import React from 'react';
import Cross from './../images/cross.svg';
import FilterOption from './FilterOption';

function FilterBox(props){
  function closeFilterBox(){
    props.getDivStyle();
  }

  return (
    <div className={`filterBox ${props.className}`}>
      <div>
      <div className="filterHeader">
        <h4>Filter</h4>
        <button onClick={ closeFilterBox } className="close">
          <img src={ Cross } alt="Close"/>
        </button>
      </div>
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
    </div>
      <button onClick={ closeFilterBox } className="okSearch">
        Filter
      </button>
    </div>

  )
}

export default FilterBox;
