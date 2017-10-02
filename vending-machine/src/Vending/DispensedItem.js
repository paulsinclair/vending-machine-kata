import React, {Component} from 'react'

class DispensedItem extends Component{
  render(){
   let src = this.props.src || 'empty.png'
  //  let alt = this.props.alt || 'empty.png'
   return(
       <img style={{width: 50, height: 50}} src={require('../' + src)} alt=''/>
      )
 }
}
export default DispensedItem
