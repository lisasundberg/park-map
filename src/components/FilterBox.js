import React, {Component} from 'react';
import CrossWhite from './../images/cross-white.svg';
import CrossDark from './../images/cross-dark.svg';
import CrossDarkLarge from './../images/cross-dark-large.svg';
import FilterOption from './FilterOption';
import SearchSuggestion from './SearchSuggestion';

class FilterBox extends Component {

  state = {
    chosenFilters: [],
    visibility: false
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
    <React.Fragment>
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
    <div className={`flex column filterBox ${this.props.className}`}>
      <div className="flex spaceBetween">
        <div></div>
        <button onClick={ this.closeFilterBox } className="close">
          <img src={ CrossDarkLarge } alt="Close"/>
        </button>
      </div>
      { this.props.visibility &&
        <div className="searchSuggestions">
          <h4>Sökförslag</h4>
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
        </div>}

      <div>
        <div className="filterHeader">
          <h4>Filtrera</h4>
        </div>
        <div className="filterBoxes grid">
          <FilterOption
            name="Bad"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Grillning"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Toaletter"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Utsikt"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Tillgängligt"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Alkohol"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Utegym"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Boule"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
          <FilterOption
            name="Minigolf"
            addFilter={this.getFilterValue}
            removeFilter={this.removeFilterValue}
          />
        </div>
      </div>
      <button onClick={ this.closeFilterBox } className="okSearch">
        Filtrera
      </button>

    </div>
    </React.Fragment>
  )}}

export default FilterBox;
