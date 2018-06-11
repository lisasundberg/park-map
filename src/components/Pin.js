import React, { Component } from 'react';

class Pin extends Component {
    state = {
      className: 'hidden'
    }
    showInfo = () => {
      if (this.state.className === "hidden"){
        this.setState({ className: 'visible' });
      } else {
        this.setState({ className: 'hidden' });
      }
    }
    render(){
      return(
        <div>
          <div className="pin" onClick={ this.showInfo }>
              <i className="fas fa-map-marker"></i>
              <p className="pin-title">{ this.props.title }</p>
          </div>
          <div className={ this.state.className }>
            <h2>{ this.props.title }</h2>
          </div>
      </div>
      );
    }
  }

export default Pin;
