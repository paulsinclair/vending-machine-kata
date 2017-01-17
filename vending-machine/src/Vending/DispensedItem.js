import React, {Component} from 'react'
import {Image, View} from 'react-native'
import ReactDOM from 'react-dom';

class DispensedItem extends Component{
  render(){
   let src = this.props.src || 'empty.png'
   let alt = this.props.alt
   return(
       <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center', alignItems: 'center',}}> {alt}<br/>
       <Image style={{width: 50, height: 50}} source={require('./' + src)}/>
       </View>
      )
 }
}
//<Image style={{width: 50, height: 50}} source={require('./empty.png')}/>
ReactDOM.render(
  <DispensedItem />,
  document.getElementById('root')
);
export default DispensedItem