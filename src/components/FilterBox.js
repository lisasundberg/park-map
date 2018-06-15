import React, {Component} from 'react';
import Cross from './../images/cross.svg';
import FilterOption from './FilterOption';

class FilterBox extends Component {

  state = {
    chosenFilters: []
  }

 closeFilterBox = () => {
    this.props.getDivStyle();
  }

  getFilterValue = (lol) => {
    let array = this.state.chosenFilters;
    array.push(lol);
    this.setState({
      chosenFilters: array
    });
  }

render(){
  console.log(document.getElementById('filterOutputBox'))
  return (
    <div>
      <div className="chosenFilters">
        { this.state.chosenFilters.map(function(filter, index){
          return <p key={index} className="filterItem"> {filter} </p>;
        })}
      </div>
    <div className={`filterBox ${this.props.className}`}>
      <div>
        <div className="filterHeader">
          <h4>Filter</h4>
          <button onClick={ this.closeFilterBox } className="close">
            <img src={ Cross } alt="Close"/>
          </button>
        </div>
        <div className="filterBoxes">
          <FilterOption
            name="bbq"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="swim"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="gym"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="booze"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
          />
        </div>
      </div>
      <button onClick={ this.closeFilterBox } className="okSearch">
        Filter
      </button>

    </div>
    </div>
  )}}

export default FilterBox;
