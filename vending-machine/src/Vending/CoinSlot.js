import React, { Component } from 'react';
import { View } from 'react-native';
const ReactNative = require('react-native');
const {
  Button,
} = ReactNative;

import VendingMachine from '../app/VendingMachine.js'
const insertCoin = VendingMachine.insertCoin

class CoinSlot extends Component {
componentWillMount(){
this.state = {coin: this.props.coin, machine: this.props.machine}
}
  render() {
    return (
      <div className="CoinSlot">
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Button onPress={()=>{this.handleClick()}} title={"Insert " + this.props.coin}/>
               </View>
      </div>
    );
  }
  handleClick = function () {
   insertCoin(this.props.coin,this.state.machine)
   this.props.onButtonClick(this.state.machine)
  }
}

export default CoinSlot;