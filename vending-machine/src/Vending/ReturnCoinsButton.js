import React, {Component} from 'react'
import { View} from 'react-native'
import VendingMachine from '../app/VendingMachine.js'

const ReactNative  = require('react-native');
const {
  Button,
} = ReactNative;


class ReturnCoinsButton extends Component {
//componentWillMount(){}
 render(){
  return(
  <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'center',}}>
       <Button title="RETURN COINS" onPress={()=>{VendingMachine.pressReturnCoins(this.props.machine);this.props.onButtonClick(this.props.machine)}}/>
  </View>
  )
 }
}

export default ReturnCoinsButton