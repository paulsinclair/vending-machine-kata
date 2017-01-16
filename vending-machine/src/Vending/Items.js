import React, {Component} from 'react';
import Item from './Item.js'
import { View } from 'react-native';

class Buttons extends Component {
render(){
var items = this.props.items
var updateMachine = this.props.onButtonClick
var mac = this.props.machine
var buttons = []
var index = 0
items.forEach(function(product){
 index += 1
 buttons.push(
  <Item machine={mac} onButtonClick={updateMachine} item={product} key={index}/>
 )
})
return(
<div className="Buttons">
 <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'center',backgroundColor: 'blue',}}>
  {buttons}
 </View>
</div>)
}
}
export default Buttons