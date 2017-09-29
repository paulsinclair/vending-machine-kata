import React, { Component } from 'react';
import VendingDisplay from '../app/VendingDisplay.js'
import Button from './Button.js';
import VendingMachine from '../app/VendingMachine.js'

const convertToCurrency = VendingDisplay.convertToCurrency


const pressButton = VendingMachine.pressButton

class Item extends Component {
componentWillMount(){
this.setState ({machine: this.props.machine})
}
  render() {
    var item = this.props.item
    return (
      <div className="Item">
                <Button color="deepskyblue" onPress={()=>{this.handleClick()}} title={"Buy " + item.name + " " + convertToCurrency(item.price)}/>
      </div>
    );
  }
  handleClick = function () {
   var machine = this.state.machine
   machine.item = this.props.item
   pressButton(this.state.machine)
   this.props.onButtonClick(machine)
  }
}

export default Item;
