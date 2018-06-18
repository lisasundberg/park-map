import React, {Component} from 'react';

class FilterOption extends Component {
  state = {
    activated: 'inactive'
  }
toggleFilter = () => {
  // console.log(this.refs.infoBox);
  if(this.state.activated === 'active') {
    this.setState({activated: 'inactive'});
    this.props.removeFilter(this.props.name);
  } else {
      this.setState({activated: 'active'});
      this.props.addFilter(this.props.name);
  }
}

filterOptionValue = () => {

}
  render() {
    return(
      <div
        onClick={this.toggleFilter}
        className={this.state.activated}
        >

          {this.props.name}
        </div>
    )
  }
}

export default FilterOption;
