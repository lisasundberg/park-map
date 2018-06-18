import React, {Component} from 'react';
import CrossWhite from './../images/cross-white.svg';
import CrossDark from './../images/cross-dark.svg';
import FilterOption from './FilterOption';
import SearchSuggestion from './SearchSuggestion';

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

  removeFilterValue = (lol) => {
    let array = this.state.chosenFilters;

    const filteredArray = array.filter(value => {
      return value !== lol;
    });
    this.setState({
      chosenFilters: filteredArray
    });
  }

  removeFilter = (event) => {
    let array = this.state.chosenFilters;

    const filteredArray = array.filter(value => {
      return value !== event.target.id;
    });
    this.setState({
      chosenFilters: filteredArray
    });
  }

render(){
  return (
    <div>
      <div className="chosenFilters">
        { this.state.chosenFilters.map((filter, index) => {
            return (
              <p key={index} className="filterItem">
              {filter}
              <span className="cross" onClick={ this.removeFilter }>
                <img src={ CrossDark } id={filter} alt="remove" />
              </span>
            </p>
          );
        })}
      </div>
    <div className={`filterBox ${this.props.className}`}>
      <div className="searchSuggestions">
        <SearchSuggestion
          parkName="Vitabergsparken"
          parkSmekName="Vitan, Vitabergen"
          features="Grill, Alkoholtillstånd, Utsikt"
        />
        <SearchSuggestion
          parkName="Tantolunden"
          parkSmekName="Tanto"
          features="Bad, Grill, Minigolf, Alkoholtillstånd"
        />
        <SearchSuggestion
          parkName="Rålambshovsparken"
          parkSmekName="Rålis, Rållan"
          features="Bad, Grill, Boule"
        />
      </div>
      <div>
        <div className="filterHeader">
          <h4>Filter</h4>
          <button onClick={ this.closeFilterBox } className="close">
            <img src={ CrossWhite } alt="Close"/>
          </button>
        </div>
        <div className="filterBoxes">
          <FilterOption
            name="bbq"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="swim"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="gym"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="booze"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="bad"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
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
