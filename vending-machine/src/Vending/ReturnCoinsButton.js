import React, {Component} from 'react'
import VendingMachine from '../app/VendingMachine.js'

import Button from './Button.js';



class ReturnCoinsButton extends Component {
//componentWillMount(){}
 render(){
  return(
       <Button title="RETURN COINS" onPress={()=>{VendingMachine.pressReturnCoins(this.props.machine);this.props.onButtonClick(this.props.machine)}}/>
  )
 }
}

export default ReturnCoinsButton
