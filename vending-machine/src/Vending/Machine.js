import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CoinSlots from './CoinSlots.js'
import Buttons from './Items.js'
import Display from './Display.js'
import VendingMachine from '../app/VendingMachine.js'
import MachineFactory from '../app/MachineFactory.js'
const Items = require("../app/Items")
import Inventory from '../app/Inventory.js'
const createMachine = MachineFactory.createMachine
import CoinReturn from './CoinReturn.js'
const ReactNative = require('react-native');
//const DispenserTray = require('./DispenserTray.js')
const {
  Button,
} = ReactNative;

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
       <Button title="RETURN COINS" onPress={()=>{VendingMachine.pressReturnCoins(this.state.machine);this.updateMachine(this.state.machine)}}/>
       <CoinSlots machine={this.state.machine} onButtonClick={this.updateMachine} coins={["Nickel","Dime","Quarter","Bad Penny","Peso"]}/>
       <Buttons machine={this.state.machine} onButtonClick={this.updateMachine} items={[Items.cola,Items.candy,Items.chips]}/>
       <Display/>
       <DispensedItem item={this.state.machine}/>
       <Display displayText={"ITEM Dispensed: " + this.getDispensedItem()}/>
       <div onMouseOver={this.emptyCoinReturn}>
        <CoinReturn machine={this.state.machine} coinReturn={this.state.machine.coinReturn}/>
       </div>
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

    getDispensedItem(){
    var machine = this.state.machine
    return machine.dispenser
    }

     emptyCoinReturn = function(){
       var mac = this.state.machine
       mac.coinReturn = []
       this.setState ({machine: mac})
       }.bind(this)
     }

     class DispensedItem extends Component{
     componentWillMount(){
     var item = this.props.machine.dispenser
     this.state = {name: item.name, image: item.image}
     }
     render(){
      return(<img src="./cola.jpg" alt="Cola" height="420" width="420"/>)
     }
     }

ReactDOM.render(
  <Machine />,
  document.getElementById('root')
);

export default Machine;