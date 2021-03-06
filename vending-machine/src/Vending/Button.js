import React, { Component } from 'react';

class Button extends Component {
  render(){
    return (
      <button
      className = "App-button"
      onClick={this.props.onPress}>{this.props.title}
      </button>
    )
  }
}

export default Button;
