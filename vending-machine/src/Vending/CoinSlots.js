import React, {Component} from 'react';

import CoinSlot from './CoinSlot.js'

class CoinSlots extends Component {
componentWillMount(){
this.state = {coinReturn: this.props.coinReturn}
}
 render(){
   var coins = this.props.coins || []
   var slots =[]
   var mac = this.props.machine
   var updateMachine = this.props.onButtonClick
   var index = 0
   coins.forEach(function(coin) {
   index += 1
   slots.push(<CoinSlot machine={mac} onButtonClick={updateMachine} coin={coin} key={index}/>)
   })
   return (
    <div className="CoinSlots">
     {slots}
    </div>
   )}
}

export default CoinSlots