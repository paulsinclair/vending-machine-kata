import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CoinSlots from './CoinSlots.js'
import Buttons from './Items.js'
import Display from './Display.js'
import ReturnCoinsButton from './ReturnCoinsButton.js'
import MachineFactory from '../app/MachineFactory.js'
const Items = require("../app/Items")
import Inventory from '../app/Inventory.js'
const createMachine = MachineFactory.createMachine
import CoinReturn from './CoinReturn.js'
import DispensedItem from './DispensedItem.js'

class Machine extends Component {
  componentWillMount(){
  var newMachine = createMachine()
  Inventory.fill(newMachine,Items.candy)
  Inventory.fill(newMachine,Items.cola)
  Inventory.fill(newMachine,Items.chips)
  this.state = {machine: newMachine}
  }
  render() {
    return (
      <div className="Machine">
       VENDING MACHINE
       <Display displayText={this.getDisplay()}/>
       <CoinSlots machine={this.state.machine} onButtonClick={this.updateMachine} coins={["Nickel","Dime","Quarter","Bad Penny","Peso"]}/>
       <Buttons machine={this.state.machine} onButtonClick={this.updateMachine} items={[Items.cola,Items.candy,Items.chips]}/>
       <DispensedItem src={this.getDispensedItem().image} alt={this.getDispensedItem().name}/>
       <div onMouseOver={this.emptyCoinReturn}>
       <CoinReturn machine={this.state.machine} coinReturn={this.state.machine.coinReturn}/>
       </div>
       <ReturnCoinsButton machine={this.state.machine} onButtonClick={this.updateMachine}/>
      </div>
    )
    }
    updateMachine = function(mac) {
     this.setState({machine: mac})
    }.bind(this)

    getDisplay(){
    var machine = this.state.machine
    return machine.display
    }

    getDispensedItem = function(){
    var machine = this.state.machine
    return machine.dispenser
    }.bind(this)

     emptyCoinReturn = function(){
       var mac = this.state.machine
       mac.coinReturn = []
       this.setState ({machine: mac})
       }.bind(this)
     }

ReactDOM.render(
  <Machine />,
  document.getElementById('root')
);

export default Machine;