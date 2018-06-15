import React, {Component} from 'react';

class FilterOption extends Component {
  state = {
    activated: 'inactive'
  }
activateFilter = () => {
  this.props.addFilter(this.props.name)
  console.log(this.props.name)
  // console.log(this.refs.infoBox);
  if(this.state.activated === 'active') {
    this.setState({activated: 'inactive'})
  } else {
      this.setState({activated: 'active'})

  }
}

filterOptionValue = () => {

}
  render() {
    return(
      <div
        onClick={this.activateFilter}
        className={this.state.activated}
        >

          {this.props.name}
        </div>
    )
  }
}

export default FilterOption;
