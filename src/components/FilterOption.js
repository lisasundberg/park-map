import React, {Component} from 'react';

class FilterOption extends Component {
  state = {
    activated: 'inactive'
  }
activateFilter = () => {
  console.log(this.ref.infoBoxRef);
  if(this.state.activated === 'active') {
    this.setState({activated: 'inactive'})
  } else {
      this.setState({activated: 'active'})
  }
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
