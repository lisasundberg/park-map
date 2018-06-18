import React, {Component} from 'react';

class FilterOption extends Component {
  state = {
    filterOptionState: ''
  }
toggleFilter = () => {
  // console.log(this.refs.infoBox);
  if(this.state.filterOptionState === 'active') {
    this.setState({filterOptionState: 'inactive'});
    this.props.removeFilter(this.props.name);
  } else {
      this.setState({filterOptionState: 'active'});
      this.props.addFilter(this.props.name);
  }
}
// filterOptionValue = (this.props.className) => {
//
// }
  render() {
    return(
      <div
        onClick={this.toggleFilter}
        className={this.state.filterOptionState}
        >
          {this.props.name}
        </div>
    )
  }
}

export default FilterOption;
