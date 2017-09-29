import React, { Component } from 'react';
import Button from './Button.js';


import VendingMachine from '../app/VendingMachine.js'
const insertCoin = VendingMachine.insertCoin

class CoinSlot extends Component {
componentWillMount(){
this.setState ( {coin: this.props.coin, machine: this.props.machine})
}
  render() {
    return (
      <div className="CoinSlot">
                <Button onPress={()=>{this.handleClick()}} title={"Insert " + this.props.coin}/>
      </div>
    );
  }
  handleClick = function () {
   insertCoin(this.props.coin,this.state.machine)
   this.props.onButtonClick(this.state.machine)
  }
}

export default CoinSlot;
