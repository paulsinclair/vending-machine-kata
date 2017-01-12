import React, { Component } from 'react';
import CoinSlot from './CoinSlot.js'
import Display from './Display.js'
import MachineFactory from '../app/MachineFactory.js'
const createMachine = MachineFactory.createMachine

class Machine extends Component {
  componentWillMount(){
  var machine = createMachine()
  machine.display = "INSERT COINS"
  this.state = {machine}
  }
  render() {
    return (
      <div className="Machine">
       VENDING MACHINE
       <Display displayText={this.state.machine.display}/>
       <CoinSlot/>
      </div>
    );
  }
}

export default Machine;