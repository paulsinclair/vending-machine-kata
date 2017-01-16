import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="Display">DISPLAY
   {this.props.displayText}
      </div>
    )
  }
}

export default Display;