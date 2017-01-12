import React, { Component } from 'react';
import CoinSlot from './CoinSlot.js'

class Machine extends Component {
  render() {
    return (
      <div className="Machine">
       VENDING MACHINE
       <CoinSlot/>
      </div>
    );
  }
}

export default Machine;