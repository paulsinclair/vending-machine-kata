import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="Display">
   {this.props.displayText}
      </div>
    )
  }
}

export default Display;