import React, { Component } from 'react';
import { View } from 'react-native';
import VendingDisplay from '../app/VendingDisplay.js'
const convertToCurrency = VendingDisplay.convertToCurrency
const ReactNative = require('react-native');
const {
  Button,
} = ReactNative;

import VendingMachine from '../app/VendingMachine.js'
const pressButton = VendingMachine.pressButton

class Item extends Component {
componentWillMount(){
this.state = {machine: this.props.machine}
}
  render() {
    var item = this.props.item
    return (
      <div className="Item">
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Button color="deepskyblue" onPress={()=>{this.handleClick()}} title={"Buy " + item.name + " " + convertToCurrency(item.price)}/>
               </View>
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