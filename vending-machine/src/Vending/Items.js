import React, {Component} from 'react';
import Item from './Item.js'

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
  {buttons}
</div>)
}
}
export default Buttons
